import { getChannel, getNewGameMessage, getUpdatedContextMessage } from './discord-wrapper';
import config from './config';
import retryPromise from './utils';
import { BigNumber, providers } from 'ethers';
import { RockPaperScissors, RockPaperScissors__factory } from './typechain-types';
import { TextChannel } from 'discord.js';
import { ContextUpdateEvent, GameUpdatedEvent } from './typechain-types/contracts/RockPaperScissors';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const announceUpdatedContext = (channel: TextChannel, contract: RockPaperScissors) => {
    const filter = contract.filters.ContextUpdate();
    const callback = async () => {
        const context = await retryPromise(contract.getCurrentContext(), 2);
        const msg = getUpdatedContextMessage(context);
        await retryPromise(channel.send({ embeds: [ msg ]}), 2);
    }
    contract.on<ContextUpdateEvent>(filter, callback);
}

const announceNewGames = (channel: TextChannel, contract: RockPaperScissors) => {
    const filter = contract.filters.GameUpdated(undefined, 0);
    const callback = async (id: BigNumber) => {
        const wrapper = await retryPromise(contract.getGame(id), 2);
        const msg = getNewGameMessage(config, id, wrapper);
        await retryPromise(channel.send({ embeds: [ msg ]}), 2);
    }
    contract.on<GameUpdatedEvent>(filter, callback);
}

const main = async (signal: AbortSignal) => {
    const channel = await retryPromise(getChannel(config, signal), 100);
    const provider = new providers.JsonRpcProvider(config.HTTP_PROVIDER);
    const contract = RockPaperScissors__factory.connect(config.ADDRESS, provider);
    signal.addEventListener('abort', () => {
        contract.removeAllListeners();
    });

    announceNewGames(channel, contract);
    announceUpdatedContext(channel, contract);

    while(contract.listenerCount() > 0)
        await sleep(1000);
}

const controller = new AbortController();
const { signal } = controller
const abort = () => {
    controller.abort('Shutdown requested');
}

process.on('SIGINT', abort);

main(signal)
    .then(() => process.exit(0))
    .catch((error) => {
        if (error.name === 'AbortError') process.exit(0);
        console.error(error);
        process.exit(1);
    })