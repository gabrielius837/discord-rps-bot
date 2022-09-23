/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RockPaperScissors,
  RockPaperScissorsInterface,
  GameContext,
} from "../../contracts/RockPaperScissors";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "waitingForOpponentTimeout",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "moveTimeout",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "scoreThreshold",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "roundThreshold",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "ownerTipRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralTipRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "claimTimeout",
            type: "uint32",
          },
        ],
        internalType: "struct GameContext.ContextData",
        name: "context",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newIndex",
        type: "uint256",
      },
    ],
    name: "ContextUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "enum RockPaperScissors.GameState",
        name: "state",
        type: "uint8",
      },
    ],
    name: "GameUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "ref",
        type: "address",
      },
    ],
    name: "NewReferral",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "round",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum RockPaperScissors.Move",
        name: "challengerMove",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum RockPaperScissors.Move",
        name: "opponentMove",
        type: "uint8",
      },
    ],
    name: "ValidatedMoves",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "adr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
    ],
    name: "abortGame",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "password",
        type: "string",
      },
    ],
    name: "acceptGame",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
    ],
    name: "claimPot",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentContext",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "waitingForOpponentTimeout",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "moveTimeout",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "scoreThreshold",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "roundThreshold",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "ownerTipRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralTipRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "claimTimeout",
            type: "uint32",
          },
        ],
        internalType: "struct GameContext.ContextData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
    ],
    name: "getGame",
    outputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "adr",
                    type: "address",
                  },
                  {
                    internalType: "uint8",
                    name: "score",
                    type: "uint8",
                  },
                  {
                    internalType: "bytes32",
                    name: "hashedMove",
                    type: "bytes32",
                  },
                  {
                    internalType: "bytes32",
                    name: "move",
                    type: "bytes32",
                  },
                ],
                internalType: "struct RockPaperScissors.Player",
                name: "challenger",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "adr",
                    type: "address",
                  },
                  {
                    internalType: "uint8",
                    name: "score",
                    type: "uint8",
                  },
                  {
                    internalType: "bytes32",
                    name: "hashedMove",
                    type: "bytes32",
                  },
                  {
                    internalType: "bytes32",
                    name: "move",
                    type: "bytes32",
                  },
                ],
                internalType: "struct RockPaperScissors.Player",
                name: "opponent",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "pot",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updateTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "acceptBlockNumber",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "validateBlockNumber",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "passwordHash",
                type: "bytes32",
              },
              {
                internalType: "enum RockPaperScissors.GameState",
                name: "state",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "round",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "referral",
                type: "address",
              },
              {
                internalType: "address",
                name: "winner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "contextIndex",
                type: "uint256",
              },
            ],
            internalType: "struct RockPaperScissors.Game",
            name: "game",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "waitingForOpponentTimeout",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "moveTimeout",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "scoreThreshold",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "roundThreshold",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "ownerTipRate",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "referralTipRate",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "claimTimeout",
                type: "uint32",
              },
            ],
            internalType: "struct GameContext.ContextData",
            name: "context",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct RockPaperScissors.GameWrapper",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "referrals",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registerReferral",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "referral",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "passwordHash",
        type: "bytes32",
      },
    ],
    name: "startNewGame",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "hashedMove",
        type: "bytes32",
      },
    ],
    name: "submitHashedMove",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "move",
        type: "bytes32",
      },
    ],
    name: "submitMove",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
    ],
    name: "surrenderGame",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "waitingForOpponentTimeout",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "moveTimeout",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "scoreThreshold",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "roundThreshold",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "ownerTipRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "referralTipRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "claimTimeout",
            type: "uint32",
          },
        ],
        internalType: "struct GameContext.ContextData",
        name: "context",
        type: "tuple",
      },
    ],
    name: "updateContext",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "withraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002569380380620025698339810160408190526200003491620001a5565b80620000403362000139565b6003546000908152600260209081526040918290208351815492850151938501516060860151608087015160a088015160c09098015163ffffffff908116600160c01b0263ffffffff60c01b19998216600160a01b0263ffffffff60a01b19938316600160801b0293909316600160801b600160c01b03199483166c010000000000000000000000000263ffffffff60601b19968416680100000000000000000296909616600160401b600160801b03199a8416640100000000026001600160401b0319909a16939097169290921797909717979097169390931791909117169390931792909217929092169190911790555062000272565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b805163ffffffff81168114620001a057600080fd5b919050565b600060e08284031215620001b857600080fd5b60405160e081016001600160401b0381118282101715620001e957634e487b7160e01b600052604160045260246000fd5b604052620001f7836200018b565b815262000207602084016200018b565b60208201526200021a604084016200018b565b60408201526200022d606084016200018b565b606082015262000240608084016200018b565b60808201526200025360a084016200018b565b60a08201526200026660c084016200018b565b60c08201529392505050565b6122e780620002826000396000f3fe60806040526004361061010e5760003560e01c80639ca423b3116100a5578063d7a4de3d11610074578063f2fde38b11610059578063f2fde38b1461036b578063fa2e80521461038b578063ff3792f41461039e57600080fd5b8063d7a4de3d14610350578063e850497a1461036357600080fd5b80639ca423b3146102c85780639e231e2d14610308578063a2f77bcc1461031b578063c1b6944c1461034857600080fd5b8063715018a6116100e1578063715018a61461018e5780638013ff93146101a35780638da5cb5b1461028d57806390de2720146102b557600080fd5b80630ff943541461011357806327e235e314610128578063583bbb2b1461016857806366a47f631461017b575b600080fd5b610126610121366004611c80565b6103b1565b005b34801561013457600080fd5b50610155610143366004611cb9565b60006020819052908152604090205481565b6040519081526020015b60405180910390f35b610126610176366004611c80565b610556565b610126610189366004611cd4565b610732565b34801561019a57600080fd5b5061012661094c565b3480156101af57600080fd5b506102806040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915250600354600090815260026020908152604091829020825160e081018452905463ffffffff808216835264010000000082048116938301939093526801000000000000000081048316938201939093526c01000000000000000000000000830482166060820152600160801b830482166080820152600160a01b8304821660a0820152600160c01b9092041660c082015290565b60405161015f9190611ced565b34801561029957600080fd5b506001546040516001600160a01b03909116815260200161015f565b6101266102c3366004611cd4565b6109b2565b3480156102d457600080fd5b506102f86102e3366004611cb9565b60046020526000908152604090205460ff1681565b604051901515815260200161015f565b610126610316366004611cd4565b610ade565b34801561032757600080fd5b5061033b610336366004611cd4565b610c28565b60405161015f9190611d8f565b610126610f0f565b61012661035e366004611f04565b610fb1565b6101266111d2565b34801561037757600080fd5b50610126610386366004611cb9565b6112aa565b610155610399366004611f80565b61138c565b6101266103ac366004611faa565b6114c2565b6000828152600660209081526040808320600d81015484526002928390529220849291600b83015460ff1660038111156103ed576103ed611d4e565b14801561041a57508054600783015442916104179164010000000090910463ffffffff1690611fd8565b10155b6104585760405162461bcd60e51b815260206004820152600a602482015269554e454c494749424c4560b01b60448201526064015b60405180910390fd5b81546001600160a01b031633148061047c575060038201546001600160a01b031633145b6104b25760405162461bcd60e51b81526020600482015260076024820152664144445245535360c81b604482015260640161044f565b60006104bd83611589565b6002810154909150156104fe5760405162461bcd60e51b815260206004820152600960248201526814d55093525515115160ba1b604482015260640161044f565b60008681526006602052604081209061051682611589565b600281018890559050600061052a836115b2565b60028101549091506000036105415750505061054e565b61054a896115d6565b5050505b505050505050565b6000828152600660209081526040808320600d810154845260029092529091208391906001600b83015460ff16600381111561059457610594611d4e565b1480156105c157508054600783015442916105be9164010000000090910463ffffffff1690611fd8565b10155b6105fa5760405162461bcd60e51b815260206004820152600a602482015269554e454c494749424c4560b01b604482015260640161044f565b81546001600160a01b031633148061061e575060038201546001600160a01b031633145b6106545760405162461bcd60e51b81526020600482015260076024820152664144445245535360c81b604482015260640161044f565b600061065f83611589565b6001810154909150156106a05760405162461bcd60e51b815260206004820152600960248201526814d55093525515115160ba1b604482015260640161044f565b6000868152600660205260408120906106b882611589565b60018101889055905060006106cc836115b2565b60018101549091506000036106e35750505061054e565b600b8301805460ff191660029081179091554260078501555b6040518a907f543420551063d8f91eff6de94de597e59a20bfdc22d0c6c0fd349e379cec169790600090a3505050505050505050565b6000818152600660209081526040808320600d810154845260029092529091208054600783015484939291429161077691600160c01b900463ffffffff1690611fd8565b10156107c55781546001600160a01b03166107c05760405162461bcd60e51b815260206004820152600a602482015269554e454c494749424c4560b01b604482015260640161044f565b6108bb565b6001600b83015460ff1660038111156107e0576107e0611d4e565b148061080457506002600b83015460ff16600381111561080257610802611d4e565b145b801561082f575080546007830154429161082d9164010000000090910463ffffffff1690611fd8565b105b6108685760405162461bcd60e51b815260206004820152600a602482015269554e454c494749424c4560b01b604482015260640161044f565b6000610873836117f1565b80549091506001600160a01b031633146108b95760405162461bcd60e51b81526020600482015260076024820152664144445245535360c81b604482015260640161044f565b505b6000848152600660205260409020426007820155600b8101805460ff19166003179055600c81018054336001600160a01b03199091168117909155610901908290611890565b600b81015460ff16600381111561091a5761091a611d4e565b60405186907f543420551063d8f91eff6de94de597e59a20bfdc22d0c6c0fd349e379cec169790600090a35050505050565b6001546001600160a01b031633146109a65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161044f565b6109b060006119e3565b565b600081815260066020526040902081906001600b82015460ff1660038111156109dd576109dd611d4e565b1480610a0157506002600b82015460ff1660038111156109ff576109ff611d4e565b145b610a3a5760405162461bcd60e51b815260206004820152600a602482015269554e454c494749424c4560b01b604482015260640161044f565b80546001600160a01b0316331480610a5e575060038101546001600160a01b031633145b610a945760405162461bcd60e51b81526020600482015260076024820152664144445245535360c81b604482015260640161044f565b600083815260066020526040812090610aac826115b2565b8054909150610ac59083906001600160a01b0316611a35565b600b82015460ff16600381111561091a5761091a611d4e565b600081815260066020526040902080548291906001600160a01b031633148015610b13575060038101546001600160a01b0316155b8015610b3757506000600b82015460ff166003811115610b3557610b35611d4e565b145b610b705760405162461bcd60e51b815260206004820152600a602482015269554e454c494749424c4560b01b604482015260640161044f565b6000838152600660208190526040909120600b8101805460ff191660031790554260078201559081015415610bde57805460068201546040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610bdc573d6000803e3d6000fd5b505b600b81015460ff166003811115610bf757610bf7611d4e565b60405185907f543420551063d8f91eff6de94de597e59a20bfdc22d0c6c0fd349e379cec169790600090a350505050565b610d1d604080516102608101825260006101e082018181526102008301829052610220830182905261024083018290526060808401918252845160808082018752848252602082018590529581018490529081018390529383019390935260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c082015290819081526040805160e08101825260008082526020828101829052928201819052606082018190526080820181905260a0820181905260c08201529101908152602001600081525090565b600082815260066020818152604080842081516102008101835281546001600160a01b03808216610180840190815260ff600160a01b9384900481166101a086015260018601546101c086015260028601546101e08601529084528551608081810188526003808801549485168352949093048216818901526004860154818801526005860154606080830191909152978501529684015494830194909452600783015494820194909452600882015492810192909252600981015460a0830152600a81015460c0830152600b8101549193909260e085019290911690811115610e0957610e09611d4e565b6003811115610e1a57610e1a611d4e565b8152600b82015460ff6101008204166020808401919091526001600160a01b03620100009092048216604080850191909152600c850154909216606080850191909152600d90940154608093840152610160850151600090815260028252829020825160e081018452905463ffffffff808216835264010000000082048116838501526801000000000000000082048116838601526c010000000000000000000000008204811683880152600160801b8204811695830195909552600160a01b8104851660a0830152600160c01b900490931660c0840152815193840182529383529282015242918101919091529392505050565b3360009081526004602052604090205460ff1615610f6f5760405162461bcd60e51b815260206004820152600a60248201527f5245474953544552454400000000000000000000000000000000000000000000604482015260640161044f565b33600081815260046020526040808220805460ff19166001179055517f67e6399acf49956ebe97f4074f1c674c1c02725966606eb359cdaab2743ebd399190a2565b6000838152600660209081526040808320600d8101548452600290925290912081548592859285926001600160a01b031615801590610ffb575060038201546001600160a01b0316155b801561101f57506000600b83015460ff16600381111561101d5761101d611d4e565b145b801561104457508054600783015442916110419163ffffffff90911690611fd8565b10155b61107d5760405162461bcd60e51b815260206004820152600a602482015269554e454c494749424c4560b01b604482015260640161044f565b8154336001600160a01b03909116036110c25760405162461bcd60e51b81526020600482015260076024820152664144445245535360c81b604482015260640161044f565b6110cc8484611a7a565b82600a01541461111e5760405162461bcd60e51b815260206004820152600860248201527f50415353574f5244000000000000000000000000000000000000000000000000604482015260640161044f565b348260060154146111715760405162461bcd60e51b815260206004820152600560248201527f56414c5545000000000000000000000000000000000000000000000000000000604482015260640161044f565b60008881526006602081905260408220908101805491923492611195908490611fd8565b9091555050426007820155600b81018054600160ff1990911681179091554360088301556003820180546001600160a01b031916331790556106fc565b336000908152602081905260409020546112305760405162461bcd60e51b815260040161044f9060208082526004908201527f5a45524f00000000000000000000000000000000000000000000000000000000604082015260600190565b33600081815260208190526040808220805490839055905190929183156108fc02918491818181858888f19350505050158015611271573d6000803e3d6000fd5b5060405181815233907f7a091cb75d8d5f5e7ecba428a87e35adb231681f6ee35c9fc6ce90966401ff5b9060200160405180910390a250565b6001546001600160a01b031633146113045760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161044f565b6001600160a01b0381166113805760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161044f565b611389816119e3565b50565b6001600160a01b038216600090815260046020526040812054839060ff16806113bc57506001600160a01b038116155b6114085760405162461bcd60e51b815260206004820152600860248201527f524546455252414c000000000000000000000000000000000000000000000000604482015260640161044f565b6000611412611aba565b60008181526006602081905260408220600354600d8201553491810191909155426007820155600a8101879055600b810180546001600160a01b038a1662010000027fffffffffffffffffffff0000000000000000000000000000000000000000ffff90911617905580546001600160a01b0319163317815591925060405183907f543420551063d8f91eff6de94de597e59a20bfdc22d0c6c0fd349e379cec169790600090a350949350505050565b6001546001600160a01b0316331461151c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161044f565b6003805490600061152c83611ff0565b90915550506003546000908152600260205260409020819061154e828261201f565b50506003546040519081527fc6a04e59094de274366f3ecee930ad5696298e207c05a878af5bdfd3df9dc54b9060200160405180910390a150565b6003810154600090336001600160a01b03909116036115a9575060030190565b5090565b919050565b6003810154600090336001600160a01b03909116036115cf575090565b5060030190565b6000818152600660209081526040808320600d810154845260029092528220909161160360038401611ad4565b9050600061161084611ad4565b9050600061161f858484611b4f565b9050857f4dc769b42f8bdeb226325fa9dd9828bbff51b0974ccf8426e7942988ad70cc5e86600b0160019054906101000a900460ff168486604051611666939291906121fa565b60405180910390a2436009860155600b85018054610100900460ff1690600161168e8361222a565b825460ff9182166101009390930a92830291909202199091161790555080546001600160a01b0316156116f1578054600160a01b900460ff168160146116d38361222a565b91906101000a81548160ff021916908360ff160217905550506116fd565b6116fa85611c3c565b90505b80548454600160a01b90910460ff166801000000000000000090910463ffffffff16148061174f57508354600b8601546c0100000000000000000000000090910463ffffffff1661010090910460ff16145b1561176f57805461176a9086906001600160a01b0316611a35565b6117a5565b6000600486018190556005860181905560018087018290556002870191909155600b8601805460ff191690911790554260078601555b600b85015460ff1660038111156117be576117be611d4e565b60405187907f543420551063d8f91eff6de94de597e59a20bfdc22d0c6c0fd349e379cec169790600090a3505050505050565b60006001600b83015460ff16600381111561180e5761180e611d4e565b0361182a5760018201546000036115a957816003015b92915050565b6002600b83015460ff16600381111561184557611845611d4e565b0361185f5760028201546000036115a95781600301611824565b505060001960005260066020527f63187d71e139eee983a88d0737447c7451979b3dbb75903c76b5fe430d36588e90565b81600601546000036118a0575050565b600d820154600090815260026020526040812060068401548154919290916118d6908390600160801b900463ffffffff16611c67565b600b8601549091506201000090046001600160a01b03161561195957825460009061190f908490600160a01b900463ffffffff16611c67565b905061191b8184612249565b600b8701546201000090046001600160a01b0316600090815260208190526040812080549295508392909190611952908490611fd8565b9091555050505b6119638183612249565b91508060008061197b6001546001600160a01b031690565b6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546119aa9190611fd8565b90915550506001600160a01b038416600090815260208190526040812080548492906119d7908490611fd8565b90915550505050505050565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b611a3f8282611890565b600b8201805460ff19166003179055426007830155600c90910180546001600160a01b039092166001600160a01b0319909216919091179055565b60008115611ab0578282604051602001611a95929190612260565b60405160208183030381529060405280519060200120611ab3565b60005b9392505050565b6005805460009182611acb83611ff0565b91905055905090565b6000808260020154604051602001611aee91815260200190565b60405160208183030381529060405280519060200120905082600101548114611b1a5750600092915050565b60028301546003166004811015611b4557806003811115611b3d57611b3d611d4e565b949350505050565b5060009392505050565b6000816003811115611b6357611b63611d4e565b836003811115611b7557611b75611d4e565b03611bac575060001960005260066020527f63187d71e139eee983a88d0737447c7451979b3dbb75903c76b5fe430d365891611ab3565b6000836003811115611bc057611bc0611d4e565b6001901b836003811115611bd657611bd6611d4e565b611be1906004611fd8565b6001901b1790508060821480611bf75750806024145b80611c025750806048145b80611c0d5750806012145b80611c185750806014145b80611c235750806018145b15611c3357505060038301611ab3565b50929392505050565b8054600382015460009160ff600160a01b9182900481169190920490911611156115a9575060030190565b6000612710611c768385612270565b611ab3919061228f565b60008060408385031215611c9357600080fd5b50508035926020909101359150565b80356001600160a01b03811681146115ad57600080fd5b600060208284031215611ccb57600080fd5b611ab382611ca2565b600060208284031215611ce657600080fd5b5035919050565b60e08101611824828463ffffffff8082511683528060208301511660208401528060408301511660408401528060608301511660608401528060808301511660808401528060a08301511660a08401528060c08301511660c0840152505050565b634e487b7160e01b600052602160045260246000fd5b6004811061138957634e487b7160e01b600052602160045260246000fd5b611d8b81611d64565b9052565b8151805180516001600160a01b0316835260208082015160ff1690840152604080820151908401526060908101519083015261034082019060208181015180516001600160a01b031660808601529081015160ff1660a0850152604081015160c0850152606081015160e0850152506040810151610100818186015260608301519150610120828187015260808401519250610140838188015260a08501519350610160848189015260c086015161018089015260e08601519450611e586101a0890186611d82565b9285015160ff166101c0880152908401516001600160a01b039081166101e088015290840151166102008601529091015161022084015250602083810151805163ffffffff9081166102408601529181015182166102608501526040808201518316610280860152606082015183166102a0860152608082015183166102c086015260a082015183166102e086015260c090910151909116610300840152909201516103209091015290565b600080600060408486031215611f1957600080fd5b83359250602084013567ffffffffffffffff80821115611f3857600080fd5b818601915086601f830112611f4c57600080fd5b813581811115611f5b57600080fd5b876020828501011115611f6d57600080fd5b6020830194508093505050509250925092565b60008060408385031215611f9357600080fd5b611f9c83611ca2565b946020939093013593505050565b600060e08284031215611fbc57600080fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611feb57611feb611fc2565b500190565b60006001820161200257612002611fc2565b5060010190565b6000813563ffffffff8116811461182457600080fd5b63ffffffff61202d83612009565b1681548163ffffffff19821617835567ffffffff0000000061205160208601612009565b60201b16808367ffffffffffffffff198416171784556bffffffff000000000000000061208060408701612009565b60401b16836bffffffffffffffffffffffff1984161782171784555050506120ee6120ad60608401612009565b82547fffffffffffffffffffffffffffffffff00000000ffffffffffffffffffffffff1660609190911b6fffffffff00000000000000000000000016178255565b6121426120fd60808401612009565b82547fffffffffffffffffffffffff00000000ffffffffffffffffffffffffffffffff1660809190911b73ffffffff0000000000000000000000000000000016178255565b61219a61215160a08401612009565b82547fffffffffffffffff00000000ffffffffffffffffffffffffffffffffffffffff1660a09190911b77ffffffff000000000000000000000000000000000000000016178255565b6121f66121a960c08401612009565b82547fffffffff00000000ffffffffffffffffffffffffffffffffffffffffffffffff1660c09190911b7bffffffff00000000000000000000000000000000000000000000000016178255565b5050565b60ff841681526060810161220d84611d64565b83602083015261221c83611d64565b826040830152949350505050565b600060ff821660ff810361224057612240611fc2565b60010192915050565b60008282101561225b5761225b611fc2565b500390565b8183823760009101908152919050565b600081600019048311821515161561228a5761228a611fc2565b500290565b6000826122ac57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220dff50819a6723ca8c44d60351f7bf01f520b8ae5da8321582d6569c1033a06fd64736f6c634300080e0033";

type RockPaperScissorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RockPaperScissorsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RockPaperScissors__factory extends ContractFactory {
  constructor(...args: RockPaperScissorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    context: GameContext.ContextDataStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RockPaperScissors> {
    return super.deploy(context, overrides || {}) as Promise<RockPaperScissors>;
  }
  override getDeployTransaction(
    context: GameContext.ContextDataStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(context, overrides || {});
  }
  override attach(address: string): RockPaperScissors {
    return super.attach(address) as RockPaperScissors;
  }
  override connect(signer: Signer): RockPaperScissors__factory {
    return super.connect(signer) as RockPaperScissors__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RockPaperScissorsInterface {
    return new utils.Interface(_abi) as RockPaperScissorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RockPaperScissors {
    return new Contract(address, _abi, signerOrProvider) as RockPaperScissors;
  }
}
