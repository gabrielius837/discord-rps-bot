import { Client, ClientOptions, Intents, TextChannel, MessageEmbed } from 'discord.js';
import { utils, constants, BigNumber } from 'ethers';

import { Config } from './config';
import { GameContext, RockPaperScissors } from './typechain-types';

export const getChannel = async (config: Config, signal: AbortSignal): Promise<TextChannel> => {
    const options: ClientOptions = { intents: [ Intents.FLAGS.GUILDS ]};
    const client = new Client(options);
    await client.login(config.TOKEN);
    client.isReady();

    const channel = client.channels.cache.get(config.CHANNEL_ID);
    if (!channel || !(channel instanceof TextChannel)) {
        console.error(channel);
        throw new Error(`Unable to find channel with id ${config.CHANNEL_ID}`);
    }

    signal.addEventListener('abort', () => client.destroy());

    console.log('Channel retrieved...');
    return channel;
}

export const getNewGameMessage = (config: Config, id: BigNumber, wrapper: RockPaperScissors.GameWrapperStructOutput): MessageEmbed => {
    const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setURL(`${config.CLIENT_URL}/game?id=${id.toString()}`)
        .setTitle(`New game #${id.toNumber()}`)
        .addFields(
            { name: 'Password protected?', value: wrapper.game.passwordHash == constants.HashZero ? 'No' : 'Yes'},
            { name: 'Bet', value: wrapper.game.pot.isZero() ? 'None' : utils.formatEther(wrapper.game.pot) }
        )

    return embed;
}

const padNumber = (value: number): string => {
    return value.toString().padStart(2, '0');
}

const numberToTimeString = (value: number) => {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor(value % 3600 / 60);
    const seconds = Math.floor(value % 3600 % 60);

    const values: string[] = [];

    if (hours) values.push(`${hours}h`);
    if (minutes) values.push(`${hours ? padNumber(minutes) : minutes}min`);
    if (seconds) values.push(`${hours || minutes ? padNumber(seconds) : seconds}s`);

    return values.join(' ');
}

export const getUpdatedContextMessage = (context: GameContext.ContextDataStructOutput) => {
    const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Game context update')
        .addFields(
            { name: 'Join timeout', value: numberToTimeString(context.waitingForOpponentTimeout) },
            { name: 'Move timeout', value: numberToTimeString(context.moveTimeout) },
            { name: 'Claim timeout', value: numberToTimeString(context.claimTimeout) },
            { name: 'Score threshold', value: context.scoreThreshold.toString() },
            { name: 'Round threshold', value: context.roundThreshold.toString() },
            { name: 'Owner tip', value: (context.ownerTipRate / 100).toFixed(2) + '%' },
            { name: 'Referral tip', value: (context.referralTipRate / 100).toFixed(2) + '%' },
        )

    return embed;
}
