// package: wallet
// file: wallet/wallet.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Wallet extends jspb.Message { 
    getId(): string;
    setId(value: string): Wallet;
    getUserId(): string;
    setUserId(value: string): Wallet;
    getName(): string;
    setName(value: string): Wallet;
    getNumber(): string;
    setNumber(value: string): Wallet;
    getBalance(): number;
    setBalance(value: number): Wallet;
    getWalletTypeId(): string;
    setWalletTypeId(value: string): Wallet;
    getWalletType(): string;
    setWalletType(value: string): Wallet;
    getWalletTypeName(): string;
    setWalletTypeName(value: string): Wallet;
    getCreatedAt(): string;
    setCreatedAt(value: string): Wallet;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Wallet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Wallet.AsObject;
    static toObject(includeInstance: boolean, msg: Wallet): Wallet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Wallet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Wallet;
    static deserializeBinaryFromReader(message: Wallet, reader: jspb.BinaryReader): Wallet;
}

export namespace Wallet {
    export type AsObject = {
        id: string,
        userId: string,
        name: string,
        number: string,
        balance: number,
        walletTypeId: string,
        walletType: string,
        walletTypeName: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class WalletID extends jspb.Message { 
    getId(): string;
    setId(value: string): WalletID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletID.AsObject;
    static toObject(includeInstance: boolean, msg: WalletID): WalletID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletID;
    static deserializeBinaryFromReader(message: WalletID, reader: jspb.BinaryReader): WalletID;
}

export namespace WalletID {
    export type AsObject = {
        id: string,
    }
}

export class UserID extends jspb.Message { 
    getId(): string;
    setId(value: string): UserID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserID.AsObject;
    static toObject(includeInstance: boolean, msg: UserID): UserID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserID;
    static deserializeBinaryFromReader(message: UserID, reader: jspb.BinaryReader): UserID;
}

export namespace UserID {
    export type AsObject = {
        id: string,
    }
}
