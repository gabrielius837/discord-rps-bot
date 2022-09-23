/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface BalanceInterface extends utils.Interface {
  functions: {
    "balances(address)": FunctionFragment;
    "withraw()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "balances" | "withraw"): FunctionFragment;

  encodeFunctionData(functionFragment: "balances", values: [string]): string;
  encodeFunctionData(functionFragment: "withraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withraw", data: BytesLike): Result;

  events: {
    "Withraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Withraw"): EventFragment;
}

export interface WithrawEventObject {
  adr: string;
  amount: BigNumber;
}
export type WithrawEvent = TypedEvent<[string, BigNumber], WithrawEventObject>;

export type WithrawEventFilter = TypedEventFilter<WithrawEvent>;

export interface Balance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BalanceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    balances(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    withraw(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  withraw(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    withraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Withraw(address,uint256)"(
      adr?: string | null,
      amount?: null
    ): WithrawEventFilter;
    Withraw(adr?: string | null, amount?: null): WithrawEventFilter;
  };

  estimateGas: {
    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    withraw(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withraw(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}