// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class addERC1155 extends ethereum.Event {
  get params(): addERC1155__Params {
    return new addERC1155__Params(this);
  }
}

export class addERC1155__Params {
  _event: addERC1155;

  constructor(event: addERC1155) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get contractid(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[3].value.toString();
  }

  get typee(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }

  get nftid(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class addERC721 extends ethereum.Event {
  get params(): addERC721__Params {
    return new addERC721__Params(this);
  }
}

export class addERC721__Params {
  _event: addERC721;

  constructor(event: addERC721) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get contractid(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[3].value.toString();
  }

  get typee(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }
}

export class startGamev extends ethereum.Event {
  get params(): startGamev__Params {
    return new startGamev__Params(this);
  }
}

export class startGamev__Params {
  _event: startGamev;

  constructor(event: startGamev) {
    this._event = event;
  }

  get townhallid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get own(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class MainGame__assetsResult {
  value0: string;
  value1: BigInt;
  value2: Address;
  value3: BigInt;
  value4: boolean;

  constructor(
    value0: string,
    value1: BigInt,
    value2: Address,
    value3: BigInt,
    value4: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    return map;
  }
}

export class MainGame__townhalluserResult {
  value0: boolean;
  value1: BigInt;

  constructor(value0: boolean, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class MainGame__assetdetailsResultValue0Struct extends ethereum.Tuple {
  get Name(): string {
    return this[0].toString();
  }

  get id(): BigInt {
    return this[1].toBigInt();
  }

  get contractadd(): Address {
    return this[2].toAddress();
  }

  get price(): BigInt {
    return this[3].toBigInt();
  }

  get tokentype(): boolean {
    return this[4].toBoolean();
  }
}

export class MainGame extends ethereum.SmartContract {
  static bind(address: Address): MainGame {
    return new MainGame("MainGame", address);
  }

  assets(param0: BigInt): MainGame__assetsResult {
    let result = super.call(
      "assets",
      "assets(uint256):(string,uint256,address,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new MainGame__assetsResult(
      result[0].toString(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBoolean()
    );
  }

  try_assets(param0: BigInt): ethereum.CallResult<MainGame__assetsResult> {
    let result = super.tryCall(
      "assets",
      "assets(uint256):(string,uint256,address,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MainGame__assetsResult(
        value[0].toString(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBoolean()
      )
    );
  }

  maincurrency(): Address {
    let result = super.call("maincurrency", "maincurrency():(address)", []);

    return result[0].toAddress();
  }

  try_maincurrency(): ethereum.CallResult<Address> {
    let result = super.tryCall("maincurrency", "maincurrency():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  townhalluser(param0: Address): MainGame__townhalluserResult {
    let result = super.call(
      "townhalluser",
      "townhalluser(address):(bool,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new MainGame__townhalluserResult(
      result[0].toBoolean(),
      result[1].toBigInt()
    );
  }

  try_townhalluser(
    param0: Address
  ): ethereum.CallResult<MainGame__townhalluserResult> {
    let result = super.tryCall(
      "townhalluser",
      "townhalluser(address):(bool,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MainGame__townhalluserResult(
        value[0].toBoolean(),
        value[1].toBigInt()
      )
    );
  }

  assetdetails(id: BigInt): MainGame__assetdetailsResultValue0Struct {
    let result = super.call(
      "assetdetails",
      "assetdetails(uint256):((string,uint256,address,uint256,bool))",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return changetype<MainGame__assetdetailsResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_assetdetails(
    id: BigInt
  ): ethereum.CallResult<MainGame__assetdetailsResultValue0Struct> {
    let result = super.tryCall(
      "assetdetails",
      "assetdetails(uint256):((string,uint256,address,uint256,bool))",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<MainGame__assetdetailsResultValue0Struct>(value[0].toTuple())
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class LockBaseCall extends ethereum.Call {
  get inputs(): LockBaseCall__Inputs {
    return new LockBaseCall__Inputs(this);
  }

  get outputs(): LockBaseCall__Outputs {
    return new LockBaseCall__Outputs(this);
  }
}

export class LockBaseCall__Inputs {
  _call: LockBaseCall;

  constructor(call: LockBaseCall) {
    this._call = call;
  }

  get amount(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get minerid(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class LockBaseCall__Outputs {
  _call: LockBaseCall;

  constructor(call: LockBaseCall) {
    this._call = call;
  }
}

export class AddAsset721Call extends ethereum.Call {
  get inputs(): AddAsset721Call__Inputs {
    return new AddAsset721Call__Inputs(this);
  }

  get outputs(): AddAsset721Call__Outputs {
    return new AddAsset721Call__Outputs(this);
  }
}

export class AddAsset721Call__Inputs {
  _call: AddAsset721Call;

  constructor(call: AddAsset721Call) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get contractadd(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class AddAsset721Call__Outputs {
  _call: AddAsset721Call;

  constructor(call: AddAsset721Call) {
    this._call = call;
  }
}

export class AddAsset1155Call extends ethereum.Call {
  get inputs(): AddAsset1155Call__Inputs {
    return new AddAsset1155Call__Inputs(this);
  }

  get outputs(): AddAsset1155Call__Outputs {
    return new AddAsset1155Call__Outputs(this);
  }
}

export class AddAsset1155Call__Inputs {
  _call: AddAsset1155Call;

  constructor(call: AddAsset1155Call) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get contractadd(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class AddAsset1155Call__Outputs {
  _call: AddAsset1155Call;

  constructor(call: AddAsset1155Call) {
    this._call = call;
  }
}

export class StartgameCall extends ethereum.Call {
  get inputs(): StartgameCall__Inputs {
    return new StartgameCall__Inputs(this);
  }

  get outputs(): StartgameCall__Outputs {
    return new StartgameCall__Outputs(this);
  }
}

export class StartgameCall__Inputs {
  _call: StartgameCall;

  constructor(call: StartgameCall) {
    this._call = call;
  }
}

export class StartgameCall__Outputs {
  _call: StartgameCall;

  constructor(call: StartgameCall) {
    this._call = call;
  }
}

export class LockERC721Call extends ethereum.Call {
  get inputs(): LockERC721Call__Inputs {
    return new LockERC721Call__Inputs(this);
  }

  get outputs(): LockERC721Call__Outputs {
    return new LockERC721Call__Outputs(this);
  }
}

export class LockERC721Call__Inputs {
  _call: LockERC721Call;

  constructor(call: LockERC721Call) {
    this._call = call;
  }

  get minerid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get assetid(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class LockERC721Call__Outputs {
  _call: LockERC721Call;

  constructor(call: LockERC721Call) {
    this._call = call;
  }
}

export class LockERC1155Call extends ethereum.Call {
  get inputs(): LockERC1155Call__Inputs {
    return new LockERC1155Call__Inputs(this);
  }

  get outputs(): LockERC1155Call__Outputs {
    return new LockERC1155Call__Outputs(this);
  }
}

export class LockERC1155Call__Inputs {
  _call: LockERC1155Call;

  constructor(call: LockERC1155Call) {
    this._call = call;
  }

  get assetid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class LockERC1155Call__Outputs {
  _call: LockERC1155Call;

  constructor(call: LockERC1155Call) {
    this._call = call;
  }
}

export class UnlockERC721Call extends ethereum.Call {
  get inputs(): UnlockERC721Call__Inputs {
    return new UnlockERC721Call__Inputs(this);
  }

  get outputs(): UnlockERC721Call__Outputs {
    return new UnlockERC721Call__Outputs(this);
  }
}

export class UnlockERC721Call__Inputs {
  _call: UnlockERC721Call;

  constructor(call: UnlockERC721Call) {
    this._call = call;
  }

  get minerid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get assetid(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UnlockERC721Call__Outputs {
  _call: UnlockERC721Call;

  constructor(call: UnlockERC721Call) {
    this._call = call;
  }
}

export class MintERC721Call extends ethereum.Call {
  get inputs(): MintERC721Call__Inputs {
    return new MintERC721Call__Inputs(this);
  }

  get outputs(): MintERC721Call__Outputs {
    return new MintERC721Call__Outputs(this);
  }
}

export class MintERC721Call__Inputs {
  _call: MintERC721Call;

  constructor(call: MintERC721Call) {
    this._call = call;
  }

  get assetid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MintERC721Call__Outputs {
  _call: MintERC721Call;

  constructor(call: MintERC721Call) {
    this._call = call;
  }
}

export class CollectCall extends ethereum.Call {
  get inputs(): CollectCall__Inputs {
    return new CollectCall__Inputs(this);
  }

  get outputs(): CollectCall__Outputs {
    return new CollectCall__Outputs(this);
  }
}

export class CollectCall__Inputs {
  _call: CollectCall;

  constructor(call: CollectCall) {
    this._call = call;
  }

  get minerid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CollectCall__Outputs {
  _call: CollectCall;

  constructor(call: CollectCall) {
    this._call = call;
  }
}

export class MintERC1155Call extends ethereum.Call {
  get inputs(): MintERC1155Call__Inputs {
    return new MintERC1155Call__Inputs(this);
  }

  get outputs(): MintERC1155Call__Outputs {
    return new MintERC1155Call__Outputs(this);
  }
}

export class MintERC1155Call__Inputs {
  _call: MintERC1155Call;

  constructor(call: MintERC1155Call) {
    this._call = call;
  }

  get assetid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MintERC1155Call__Outputs {
  _call: MintERC1155Call;

  constructor(call: MintERC1155Call) {
    this._call = call;
  }
}

export class SetmaincurrencyCall extends ethereum.Call {
  get inputs(): SetmaincurrencyCall__Inputs {
    return new SetmaincurrencyCall__Inputs(this);
  }

  get outputs(): SetmaincurrencyCall__Outputs {
    return new SetmaincurrencyCall__Outputs(this);
  }
}

export class SetmaincurrencyCall__Inputs {
  _call: SetmaincurrencyCall;

  constructor(call: SetmaincurrencyCall) {
    this._call = call;
  }

  get scadd(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetmaincurrencyCall__Outputs {
  _call: SetmaincurrencyCall;

  constructor(call: SetmaincurrencyCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
