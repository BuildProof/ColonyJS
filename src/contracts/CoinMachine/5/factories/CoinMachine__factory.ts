/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoinMachine, CoinMachineInterface } from "../CoinMachine";

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "ExtensionInitialised",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authority",
        type: "address",
      },
    ],
    name: "LogSetAuthority",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "LogSetOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "relayerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
    ],
    name: "MetaTransactionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "activePeriod",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentPeriod",
        type: "uint256",
      },
    ],
    name: "PeriodUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "evolvePrice",
        type: "bool",
      },
    ],
    name: "PriceEvolutionSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numTokens",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalCost",
        type: "uint256",
      },
    ],
    name: "TokensBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "whitelist",
        type: "address",
      },
    ],
    name: "WhitelistSet",
    type: "event",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract DSAuthority",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "_sigV",
        type: "uint8",
      },
    ],
    name: "executeMetaTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_sig",
        type: "bytes4",
      },
    ],
    name: "getCapabilityRoles",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
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
    inputs: [],
    name: "getColony",
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
    inputs: [],
    name: "getDeprecated",
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
        internalType: "contract DSAuthority",
        name: "authority_",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "_sigV",
        type: "uint8",
      },
    ],
    name: "verify",
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
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getMetatransactionNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "identifier",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_colony",
        type: "address",
      },
    ],
    name: "install",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finishUpgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_deprecated",
        type: "bool",
      },
    ],
    name: "deprecate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uninstall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_purchaseToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_periodLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_windowSize",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetPerPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxPerPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_userLimitFraction",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startingPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_whitelist",
        type: "address",
      },
    ],
    name: "initialise",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_whitelist",
        type: "address",
      },
    ],
    name: "setWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numTokens",
        type: "uint256",
      },
    ],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "updatePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPurchaseToken",
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
    inputs: [],
    name: "getToken",
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
    inputs: [],
    name: "getActivePeriod",
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
    inputs: [],
    name: "getActiveSold",
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
    inputs: [],
    name: "getActiveIntake",
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
    inputs: [],
    name: "getEMAIntake",
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
    inputs: [],
    name: "getTokenBalance",
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
    inputs: [],
    name: "getPeriodLength",
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
    inputs: [],
    name: "getWindowSize",
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
    inputs: [],
    name: "getTargetPerPeriod",
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
    inputs: [],
    name: "getMaxPerPeriod",
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
    inputs: [],
    name: "getCurrentPrice",
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
    inputs: [],
    name: "getSellableTokens",
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
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserLimit",
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
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getMaxPurchase",
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
    inputs: [],
    name: "getWhitelist",
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
    inputs: [],
    name: "getEvolvePrice",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600180546001600160a01b031916339081179091556040517fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a26126db8061005e6000396000f3fe6080604052600436106102255760003560e01c806382b2e25711610123578063b5b2f1ef116100ab578063e9587e861161006f578063e9587e8614610588578063eb91d37e146105a8578063f51361c7146105bd578063f9f81e09146105d2578063fcf6ba93146105e757610225565b8063b5b2f1ef14610514578063bf7e214f14610529578063bfd68ab71461053e578063c6ea3b0b14610553578063d01f63f51461057357610225565b80639251cff4116100f25780639251cff414610495578063a0e3ad26146104b5578063a5c56a2b146104ca578063a83627de146104df578063b3eac1d8146104f457610225565b806382b2e257146104365780638469ddc71461044b578063854cff2f146104605780638da5cb5b1461048057610225565b80632a1b8f9b116101b15780633610724e116101755780633610724e146103ac57806354fd4d50146103bf5780636281133d146103d45780637998a1c4146104015780637a9e5e4b1461041657610225565b80632a1b8f9b1461032d5780632a85c3661461034d5780632dfbb083146103625780633408e47014610382578063340df28f1461039757610225565b806312defc73116101f857806312defc73146102b957806313af4035146102ce5780631f7ea81f146102ee57806321df0da71461030357806329287b461461031857610225565b80630a1e0c221461022a5780630c53c51c146102555780630d638f3014610275578063114f67691461028c575b600080fd5b34801561023657600080fd5b5061023f6105fc565b60405161024c919061200d565b60405180910390f35b610268610263366004611d8e565b61060c565b60405161024c9190612142565b34801561028157600080fd5b5061028a610768565b005b34801561029857600080fd5b506102ac6102a7366004611cd1565b610871565b60405161024c919061211b565b3480156102c557600080fd5b506102ac6108b5565b3480156102da57600080fd5b5061028a6102e9366004611cd1565b6108bb565b3480156102fa57600080fd5b506102ac61093d565b34801561030f57600080fd5b5061023f610943565b34801561032457600080fd5b506102ac610952565b34801561033957600080fd5b5061028a610348366004611cd1565b610958565b34801561035957600080fd5b506102ac6109d5565b34801561036e57600080fd5b506102ac61037d366004611ebd565b6109db565b34801561038e57600080fd5b506102ac6109e1565b3480156103a357600080fd5b5061028a6109e5565b61028a6103ba366004611ee5565b610af4565b3480156103cb57600080fd5b506102ac610f94565b3480156103e057600080fd5b506103f46103ef366004611e00565b610f99565b60405161024c9190612110565b34801561040d57600080fd5b506102ac611069565b34801561042257600080fd5b5061028a610431366004611cd1565b61108d565b34801561044257600080fd5b506102ac61110b565b34801561045757600080fd5b506102ac611191565b34801561046c57600080fd5b5061028a61047b366004611cd1565b611197565b34801561048c57600080fd5b5061023f6112bd565b3480156104a157600080fd5b5061028a6104b0366004611e85565b6112cc565b3480156104c157600080fd5b506102ac61132a565b3480156104d657600080fd5b506102ac611330565b3480156104eb57600080fd5b5061028a611336565b34801561050057600080fd5b506102ac61050f366004611cd1565b611440565b34801561052057600080fd5b506102ac61145b565b34801561053557600080fd5b5061023f611484565b34801561054a57600080fd5b5061023f611493565b34801561055f57600080fd5b5061028a61056e366004611d09565b6114a2565b34801561057f57600080fd5b5061023f61174b565b34801561059457600080fd5b506102ac6105a3366004611cd1565b61175a565b3480156105b457600080fd5b506102ac6117cf565b3480156105c957600080fd5b506102ac61187e565b3480156105de57600080fd5b506103f4611884565b3480156105f357600080fd5b506103f4611894565b6004546001600160a01b03165b90565b606061062c8661061b88611440565b6106236109e1565b88888888610f99565b6106515760405162461bcd60e51b8152600401610648906122f9565b60405180910390fd5b61065a866118a4565b60006060306001600160a01b0316877f02bcc191e283bfba76a1369ec8ba06566f33010645097c104c312753e04935e88a60405160200161069d93929190611f5d565b60408051601f19818403018152908290526106b791611f41565b6000604051808303816000865af19150503d80600081146106f4576040519150601f19603f3d011682016040523d82523d6000602084013e6106f9565b606091505b50915091508161071b5760405162461bcd60e51b815260040161064890612184565b7f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b886107456118c4565b896040516107559392919061208d565b60405180910390a1979650505050505050565b61077e336000356001600160e01b03191661196f565b61079a5760405162461bcd60e51b8152600401610648906121cc565b6010546001600160a01b0316156108635760006107b561110b565b905080156108615760105460035460405163a9059cbb60e01b81526001600160a01b039283169263a9059cbb926107f3929116908590600401612074565b602060405180830381600087803b15801561080d57600080fd5b505af1158015610821573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108459190611ea1565b6108615760405162461bcd60e51b8152600401610648906124c3565b505b6003546001600160a01b0316ff5b60008061087c61110b565b9050600061088861145b565b905060006108958561175a565b90506108aa816108a58585611a4b565b611a4b565b93505050505b919050565b600e5490565b6108d1336000356001600160e01b03191661196f565b6108ed5760405162461bcd60e51b8152600401610648906121cc565b600180546001600160a01b0319166001600160a01b0383811691909117918290556040519116907fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b60095490565b6010546001600160a01b031690565b600f5490565b61096e336000356001600160e01b03191661196f565b61098a5760405162461bcd60e51b8152600401610648906121cc565b6003546001600160a01b0316156109b35760405162461bcd60e51b8152600401610648906123b0565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b60085490565b50600090565b4690565b6109fb336000356001600160e01b03191661196f565b610a175760405162461bcd60e51b8152600401610648906121cc565b600360009054906101000a90046001600160a01b03166001600160a01b03166321df0da76040518163ffffffff1660e01b815260040160206040518083038186803b158015610a6557600080fd5b505afa158015610a79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9d9190611ced565b601080546001600160a01b0319166001600160a01b0392909216919091179055670de0b6b3a7640000601255610af26000610ad661110b565b118015610aed5750600354600160a01b900460ff16155b611a62565b565b600354600160a01b900460ff1615610b1e5760405162461bcd60e51b81526004016106489061260d565b610b26611336565b6011546001600160a01b03161580610bbe57506011546001600160a01b031663673448dd610b526118c4565b6040518263ffffffff1660e01b8152600401610b6e919061200d565b60206040518083038186803b158015610b8657600080fd5b505afa158015610b9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bbe9190611ea1565b610bda5760405162461bcd60e51b815260040161064890612228565b6000610be76102a76118c4565b90506000610bf58284611a4b565b90506000610c0582600c54611ac3565b905060008211610c5f573415610c5757610c1d6118c4565b6001600160a01b03166108fc349081150290604051600060405180830381858888f19350505050158015610c55573d6000803e3d6000fd5b505b505050610f91565b610c6b600e5482611ae7565b600e55600d54610c7b9083611ae7565b600d8190556009541015610c8b57fe5b670de0b6b3a76400006012541015610d0957610ca960135483611ae7565b601355610ce260146000610cbb6118c4565b6001600160a01b03166001600160a01b031681526020019081526020016000205483611ae7565b60146000610cee6118c4565b6001600160a01b031681526020810191909152604001600020555b610d1161110b565b8210610d2157610d216000611a62565b6004546001600160a01b0316610ddd5780341015610d515760405162461bcd60e51b81526004016106489061248c565b80341115610d9d57610d616118c4565b6001600160a01b03166108fc8234039081150290604051600060405180830381858888f19350505050158015610d9b573d6000803e3d6000fd5b505b6003546040516001600160a01b039091169082156108fc029083906000818181858888f19350505050158015610dd7573d6000803e3d6000fd5b50610e94565b6004546001600160a01b03166323b872dd610df66118c4565b6003546040516001600160e01b031960e085901b168152610e2692916001600160a01b0316908690600401612021565b602060405180830381600087803b158015610e4057600080fd5b505af1158015610e54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e789190611ea1565b610e945760405162461bcd60e51b8152600401610648906123e7565b6010546001600160a01b031663a9059cbb610ead6118c4565b846040518363ffffffff1660e01b8152600401610ecb929190612074565b602060405180830381600087803b158015610ee557600080fd5b505af1158015610ef9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1d9190611ea1565b610f395760405162461bcd60e51b8152600401610648906124c3565b610f416118c4565b6010546040516001600160a01b03928316927fc244d500136edffae7025aaf7fbd7a07193ac544a1d0cc3132cf2a32452d340c92610f8592911690869086906120ef565b60405180910390a25050505b50565b600590565b600080610fd188308989604051602001610fb69493929190611fc7565b60405160208183030381529060405280519060200120611b0a565b9050600060018285888860405160008152602001604052604051610ff89493929190612124565b6020604051602081039080840390855afa15801561101a573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661104d5760405162461bcd60e51b815260040161064890612568565b6001600160a01b038a8116911614915050979650505050505050565b7f9600bfe26d6984b5236952886f19c3d84b771865e505e2cb8f3a7137b7f3a46590565b6110a3336000356001600160e01b03191661196f565b6110bf5760405162461bcd60e51b8152600401610648906121cc565b600080546001600160a01b0319166001600160a01b03838116919091178083556040519116917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b6010546040516370a0823160e01b81526000916001600160a01b0316906370a082319061113c90309060040161200d565b60206040518083038186803b15801561115457600080fd5b505afa158015611168573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061118c9190611efd565b905090565b60055490565b6003546001600160a01b031663ab2f7ae26111b06118c4565b6001806040518463ffffffff1660e01b81526004016111d193929190612045565b60206040518083038186803b1580156111e957600080fd5b505afa1580156111fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112219190611ea1565b61123d5760405162461bcd60e51b815260040161064890612531565b600354600160a01b900460ff16156112675760405162461bcd60e51b81526004016106489061260d565b601180546001600160a01b0319166001600160a01b0383161790556040517f29d77446d0fb0dcebabf25ce79ea69ba1382a4525d4acf615a38c89c798aef71906112b290839061200d565b60405180910390a150565b6001546001600160a01b031681565b6112e2336000356001600160e01b03191661196f565b6112fe5760405162461bcd60e51b8152600401610648906121cc565b6003805482158015600160a01b0260ff60a01b1990921691909117909155610f9157610f916000611a62565b60075490565b600b5490565b6000611340611b3a565b600b54909150818110611354575050610af2565b601154600160a01b900460ff1661137757600b8290556113776000610ad661110b565b81600b5410156114035761138f600654600e54611ac3565b6113a7600654670de0b6b3a764000003600f54611ac3565b01600f556000600e819055600d55600b5482036000190180156113e9576113e56113dd600654670de0b6b3a76400000383611b4d565b600f54611ac3565b600f555b82600b819055506113fe600f54600854611b64565b600c55505b7f5b873fc01d45058fe77f3883a91020f46d5a7385baac6ceab19748d1d0ae464a8183604051611434929190612644565b60405180910390a15050565b6001600160a01b031660009081526015602052604090205490565b600061118c60095461146b611b3a565b600b54101561147b57600061147f565b600d545b611b79565b6000546001600160a01b031681565b6003546001600160a01b031690565b6003546001600160a01b031663ab2f7ae26114bb6118c4565b6001806040518463ffffffff1660e01b81526004016114dc93929190612045565b60206040518083038186803b1580156114f457600080fd5b505afa158015611508573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061152c9190611ea1565b6115485760405162461bcd60e51b815260040161064890612531565b600b54156115685760405162461bcd60e51b8152600401610648906122c4565b6001600160a01b03891661158e5760405162461bcd60e51b815260040161064890612342565b600087116115ae5760405162461bcd60e51b81526004016106489061259f565b600086116115ce5760405162461bcd60e51b81526004016106489061225f565b6101ff8611156115f05760405162461bcd60e51b8152600401610648906125d6565b600085116116105760405162461bcd60e51b81526004016106489061241e565b848410156116305760405162461bcd60e51b815260040161064890612379565b670de0b6b3a76400008311156116585760405162461bcd60e51b8152600401610648906124fa565b600083116116785760405162461bcd60e51b815260040161064890612455565b601080546001600160a01b03808c166001600160a01b03199283161790925560048054928b169290911691909117905560058790556116bb600260018801611b64565b6006556007869055600885905560098490556012839055600c8290556116df611b3a565b600b556008546116ef9083611ac3565b600f556001600160a01b0381161561170a5761170a81611197565b6117176000610ad661110b565b6040517f690c4b6201f6a4c703f9d21c205d98a08dff8461e7a71e49c6d47cc8b894850190600090a1505050505050505050565b6011546001600160a01b031690565b6000670de0b6b3a7640000601254148061177d57506011546001600160a01b0316155b6117c5576117c06117a261179a61179261110b565b601354611ae7565b601254611ac3565b6001600160a01b038416600090815260146020526040902054611b79565b6117c9565b6000195b92915050565b6000806117da611b3a565b905080600b541015806117f75750601154600160a01b900460ff16155b15611806575050600c54610609565b600f54600654600e546118199190611ac3565b61182f600654670de0b6b3a76400000383611ac3565b600b549101915082036000190180156118645761186161185b600654670de0b6b3a76400000383611b4d565b83611ac3565b91505b61187082600854611b64565b9350505050610609565b5090565b600d5490565b601154600160a01b900460ff1690565b600354600160a01b900460ff1690565b6001600160a01b0316600090815260156020526040902080546001019055565b60003633301480156118d7575060348110155b156119665760606000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505082810160131901519091507f02bcc191e283bfba76a1369ec8ba06566f33010645097c104c312753e04935e8811461195257339350505050610609565b508101516001600160a01b0316915061187a565b33915050610609565b60006001600160a01b03831630141561198a575060016117c9565b6001546001600160a01b03848116911614156119a8575060016117c9565b6000546001600160a01b03166119c0575060006117c9565b60005460405163b700961360e01b81526001600160a01b039091169063b7009613906119f4908690309087906004016120c2565b60206040518083038186803b158015611a0c57600080fd5b505afa158015611a20573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a449190611ea1565b9392505050565b600081831115611a5b5781611a44565b5090919050565b601160149054906101000a900460ff16151581151514610f91576011805460ff60a01b1916600160a01b831515021790556040517f5b4e200daa1a93764a810c35f18f2fcfb14b5e95df6ae7ac1ffdc8eec425babc906112b2908390612110565b6000670de0b6b3a7640000611ad88484611b9c565b81611adf57fe5b049392505050565b808201828110156117c95760405162461bcd60e51b815260040161064890612296565b600081604051602001611b1d9190611f96565b604051602081830303815290604052805190602001209050919050565b60006005544281611b4757fe5b04905090565b6000633b9aca00611ad884633b9aca000284611bd3565b600081611ad884670de0b6b3a7640000611b9c565b808203828111156117c95760405162461bcd60e51b815260040161064890612155565b6000811580611bb757505080820282828281611bb457fe5b04145b6117c95760405162461bcd60e51b8152600401610648906121fa565b600060028206611bef576b033b2e3c9fd0803ce8000000611bf1565b825b90506002820491505b81156117c957611c0a8384611c2d565b92506002820615611c2257611c1f8184611c2d565b90505b600282049150611bfa565b60006b033b2e3c9fd0803ce8000000611ad88484611b9c565b600082601f830112611c56578081fd5b813567ffffffffffffffff80821115611c6b57fe5b604051601f8301601f191681016020018281118282101715611c8957fe5b604052828152925082848301602001861015611ca457600080fd5b8260208601602083013760006020848301015250505092915050565b803560ff811681146108b057600080fd5b600060208284031215611ce2578081fd5b8135611a4481612682565b600060208284031215611cfe578081fd5b8151611a4481612682565b60008060008060008060008060006101208a8c031215611d27578485fd5b8935611d3281612682565b985060208a0135611d4281612682565b975060408a0135965060608a0135955060808a0135945060a08a0135935060c08a0135925060e08a013591506101008a0135611d7d81612682565b809150509295985092959850929598565b600080600080600060a08688031215611da5578081fd5b8535611db081612682565b9450602086013567ffffffffffffffff811115611dcb578182fd5b611dd788828901611c46565b9450506040860135925060608601359150611df460808701611cc0565b90509295509295909350565b600080600080600080600060e0888a031215611e1a578283fd5b8735611e2581612682565b96506020880135955060408801359450606088013567ffffffffffffffff811115611e4e578384fd5b611e5a8a828b01611c46565b9450506080880135925060a08801359150611e7760c08901611cc0565b905092959891949750929550565b600060208284031215611e96578081fd5b8135611a4481612697565b600060208284031215611eb2578081fd5b8151611a4481612697565b600060208284031215611ece578081fd5b81356001600160e01b031981168114611a44578182fd5b600060208284031215611ef6578081fd5b5035919050565b600060208284031215611f0e578081fd5b5051919050565b60008151808452611f2d816020860160208601612652565b601f01601f19169290920160200192915050565b60008251611f53818460208701612652565b9190910192915050565b60008451611f6f818460208901612652565b919091019283525060601b6bffffffffffffffffffffffff19166020820152603401919050565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152601c810191909152603c0190565b60008582526bffffffffffffffffffffffff198560601b1660208301528360348301528251611ffd816054850160208701612652565b9190910160540195945050505050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b038416815260208101839052606081016008831061206657fe5b826040830152949350505050565b6001600160a01b03929092168252602082015260400190565b6001600160a01b038481168252831660208201526060604082018190526000906120b990830184611f15565b95945050505050565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b6001600160a01b039390931683526020830191909152604082015260600190565b901515815260200190565b90815260200190565b93845260ff9290921660208401526040830152606082015260800190565b600060208252611a446020830184611f15565b60208082526015908201527464732d6d6174682d7375622d756e646572666c6f7760581b604082015260600190565b60208082526028908201527f636f6c6f6e792d6d65746174782d66756e6374696f6e2d63616c6c2d756e737560408201526718d8d95cdcd99d5b60c21b606082015260800190565b602080825260149082015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604082015260600190565b60208082526014908201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604082015260600190565b60208082526019908201527f636f696e2d6d616368696e652d756e617574686f726973656400000000000000604082015260600190565b6020808252601d908201527f636f696e2d6d616368696e652d77696e646f772d746f6f2d736d616c6c000000604082015260600190565b60208082526014908201527364732d6d6174682d6164642d6f766572666c6f7760601b604082015260600190565b6020808252818101527f636f696e2d6d616368696e652d616c72656164792d696e697469616c69736564604082015260600190565b60208082526029908201527f6d6574617472616e73616374696f6e2d7369676e65722d7369676e617475726560408201526805adad2e6dac2e8c6d60bb1b606082015260800190565b6020808252601a908201527f636f696e2d6d616368696e652d696e76616c69642d746f6b656e000000000000604082015260600190565b6020808252601a908201527f636f696e2d6d616368696e652d6d61782d746f6f2d736d616c6c000000000000604082015260600190565b6020808252601b908201527f657874656e73696f6e2d616c72656164792d696e7374616c6c65640000000000604082015260600190565b6020808252601c908201527f636f696e2d6d616368696e652d70757263686173652d6661696c656400000000604082015260600190565b6020808252601d908201527f636f696e2d6d616368696e652d7461726765742d746f6f2d736d616c6c000000604082015260600190565b6020808252601c908201527f636f696e2d6d616368696e652d6c696d69742d746f6f2d736d616c6c00000000604082015260600190565b6020808252601f908201527f636f696e2d6d616368696e652d696e73756666696369656e742d66756e647300604082015260600190565b6020808252601c908201527f636f696e2d6d616368696e652d7472616e736665722d6661696c656400000000604082015260600190565b6020808252601c908201527f636f696e2d6d616368696e652d6c696d69742d746f6f2d6c6172676500000000604082015260600190565b6020808252601c908201527f636f696e2d6d616368696e652d63616c6c65722d6e6f742d726f6f7400000000604082015260600190565b6020808252601f908201527f636f6c6f6e792d6d65746174782d696e76616c69642d7369676e617475726500604082015260600190565b6020808252601d908201527f636f696e2d6d616368696e652d706572696f642d746f6f2d736d616c6c000000604082015260600190565b6020808252601d908201527f636f696e2d6d616368696e652d77696e646f772d746f6f2d6c61726765000000604082015260600190565b6020808252601b908201527f636f6c6f6e792d657874656e73696f6e2d646570726563617465640000000000604082015260600190565b918252602082015260400190565b60005b8381101561266d578181015183820152602001612655565b8381111561267c576000848401525b50505050565b6001600160a01b0381168114610f9157600080fd5b8015158114610f9157600080fdfea26469706673582212202cc7f2196bd461846e22ac984753f0c4aa147a2f0b61e4314cd7ad15059e298e64736f6c63430007030033";

type CoinMachineConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CoinMachineConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CoinMachine__factory extends ContractFactory {
  constructor(...args: CoinMachineConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CoinMachine> {
    return super.deploy(overrides || {}) as Promise<CoinMachine>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CoinMachine {
    return super.attach(address) as CoinMachine;
  }
  override connect(signer: Signer): CoinMachine__factory {
    return super.connect(signer) as CoinMachine__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoinMachineInterface {
    return new utils.Interface(_abi) as CoinMachineInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoinMachine {
    return new Contract(address, _abi, signerOrProvider) as CoinMachine;
  }
}
