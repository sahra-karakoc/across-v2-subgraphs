// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class HubPool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save HubPool entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type HubPool must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("HubPool", id.toString(), this);
    }
  }

  static load(id: string): HubPool | null {
    return changetype<HubPool | null>(store.get("HubPool", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get cumulativeUniqueLiquidityProviders(): Array<string> | null {
    let value = this.get("cumulativeUniqueLiquidityProviders");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set cumulativeUniqueLiquidityProviders(value: Array<string> | null) {
    if (!value) {
      this.unset("cumulativeUniqueLiquidityProviders");
    } else {
      this.set(
        "cumulativeUniqueLiquidityProviders",
        Value.fromStringArray(<Array<string>>value)
      );
    }
  }

  get cumulativeUniqueLiquidityProvidersCount(): BigInt {
    let value = this.get("cumulativeUniqueLiquidityProvidersCount");
    return value!.toBigInt();
  }

  set cumulativeUniqueLiquidityProvidersCount(value: BigInt) {
    this.set(
      "cumulativeUniqueLiquidityProvidersCount",
      Value.fromBigInt(value)
    );
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get liquidityAdded(): Array<string> | null {
    let value = this.get("liquidityAdded");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set liquidityAdded(value: Array<string> | null) {
    if (!value) {
      this.unset("liquidityAdded");
    } else {
      this.set("liquidityAdded", Value.fromStringArray(<Array<string>>value));
    }
  }

  get liquidityRemoved(): Array<string> | null {
    let value = this.get("liquidityRemoved");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set liquidityRemoved(value: Array<string> | null) {
    if (!value) {
      this.unset("liquidityRemoved");
    } else {
      this.set("liquidityRemoved", Value.fromStringArray(<Array<string>>value));
    }
  }

  get liquidityAddedCount(): BigInt {
    let value = this.get("liquidityAddedCount");
    return value!.toBigInt();
  }

  set liquidityAddedCount(value: BigInt) {
    this.set("liquidityAddedCount", Value.fromBigInt(value));
  }

  get liquidityRemovedCount(): BigInt {
    let value = this.get("liquidityRemovedCount");
    return value!.toBigInt();
  }

  set liquidityRemovedCount(value: BigInt) {
    this.set("liquidityRemovedCount", Value.fromBigInt(value));
  }
}

export class LiquidityAdded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LiquidityAdded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type LiquidityAdded must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("LiquidityAdded", id.toString(), this);
    }
  }

  static load(id: string): LiquidityAdded | null {
    return changetype<LiquidityAdded | null>(store.get("LiquidityAdded", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get l1Token(): Bytes {
    let value = this.get("l1Token");
    return value!.toBytes();
  }

  set l1Token(value: Bytes) {
    this.set("l1Token", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get lpTokensMinted(): BigInt {
    let value = this.get("lpTokensMinted");
    return value!.toBigInt();
  }

  set lpTokensMinted(value: BigInt) {
    this.set("lpTokensMinted", Value.fromBigInt(value));
  }

  get liquidityProvider(): string {
    let value = this.get("liquidityProvider");
    return value!.toString();
  }

  set liquidityProvider(value: string) {
    this.set("liquidityProvider", Value.fromString(value));
  }
}

export class LiquidityRemoved extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LiquidityRemoved entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type LiquidityRemoved must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("LiquidityRemoved", id.toString(), this);
    }
  }

  static load(id: string): LiquidityRemoved | null {
    return changetype<LiquidityRemoved | null>(
      store.get("LiquidityRemoved", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get l1Token(): Bytes {
    let value = this.get("l1Token");
    return value!.toBytes();
  }

  set l1Token(value: Bytes) {
    this.set("l1Token", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get lpTokensBurnt(): BigInt {
    let value = this.get("lpTokensBurnt");
    return value!.toBigInt();
  }

  set lpTokensBurnt(value: BigInt) {
    this.set("lpTokensBurnt", Value.fromBigInt(value));
  }

  get liquidityProvider(): string {
    let value = this.get("liquidityProvider");
    return value!.toString();
  }

  set liquidityProvider(value: string) {
    this.set("liquidityProvider", Value.fromString(value));
  }
}