// package: wallet
// file: wallet/wallet.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

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
    getTransactionCount(): number;
    setTransactionCount(value: number): Wallet;

    hasWalletTypeDetail(): boolean;
    clearWalletTypeDetail(): void;
    getWalletTypeDetail(): WalletTypeDetail | undefined;
    setWalletTypeDetail(value?: WalletTypeDetail): Wallet;

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
        transactionCount: number,
        walletTypeDetail?: WalletTypeDetail.AsObject,
    }
}

export class WalletTypeDetail extends jspb.Message { 
    getId(): string;
    setId(value: string): WalletTypeDetail;
    getName(): string;
    setName(value: string): WalletTypeDetail;
    getType(): string;
    setType(value: string): WalletTypeDetail;
    getDescription(): string;
    setDescription(value: string): WalletTypeDetail;
    getCreatedAt(): string;
    setCreatedAt(value: string): WalletTypeDetail;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): WalletTypeDetail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletTypeDetail.AsObject;
    static toObject(includeInstance: boolean, msg: WalletTypeDetail): WalletTypeDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletTypeDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletTypeDetail;
    static deserializeBinaryFromReader(message: WalletTypeDetail, reader: jspb.BinaryReader): WalletTypeDetail;
}

export namespace WalletTypeDetail {
    export type AsObject = {
        id: string,
        name: string,
        type: string,
        description: string,
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

export class GetWalletOptions extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): GetWalletOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWalletOptions.AsObject;
    static toObject(includeInstance: boolean, msg: GetWalletOptions): GetWalletOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWalletOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWalletOptions;
    static deserializeBinaryFromReader(message: GetWalletOptions, reader: jspb.BinaryReader): GetWalletOptions;
}

export namespace GetWalletOptions {
    export type AsObject = {
        limit: number,
    }
}

export class CreateWalletRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): CreateWalletRequest;
    getWalletTypeId(): string;
    setWalletTypeId(value: string): CreateWalletRequest;
    getName(): string;
    setName(value: string): CreateWalletRequest;
    getNumber(): string;
    setNumber(value: string): CreateWalletRequest;
    getBalance(): number;
    setBalance(value: number): CreateWalletRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWalletRequest): CreateWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWalletRequest;
    static deserializeBinaryFromReader(message: CreateWalletRequest, reader: jspb.BinaryReader): CreateWalletRequest;
}

export namespace CreateWalletRequest {
    export type AsObject = {
        userId: string,
        walletTypeId: string,
        name: string,
        number: string,
        balance: number,
    }
}

export class UpdateWalletRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateWalletRequest;
    getName(): string;
    setName(value: string): UpdateWalletRequest;
    getNumber(): string;
    setNumber(value: string): UpdateWalletRequest;
    getWalletTypeId(): string;
    setWalletTypeId(value: string): UpdateWalletRequest;
    getBalance(): number;
    setBalance(value: number): UpdateWalletRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateWalletRequest): UpdateWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateWalletRequest;
    static deserializeBinaryFromReader(message: UpdateWalletRequest, reader: jspb.BinaryReader): UpdateWalletRequest;
}

export namespace UpdateWalletRequest {
    export type AsObject = {
        id: string,
        name: string,
        number: string,
        walletTypeId: string,
        balance: number,
    }
}

export class GetUserWalletsResponse extends jspb.Message { 
    clearWalletsList(): void;
    getWalletsList(): Array<Wallet>;
    setWalletsList(value: Array<Wallet>): GetUserWalletsResponse;
    addWallets(value?: Wallet, index?: number): Wallet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserWalletsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserWalletsResponse): GetUserWalletsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserWalletsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserWalletsResponse;
    static deserializeBinaryFromReader(message: GetUserWalletsResponse, reader: jspb.BinaryReader): GetUserWalletsResponse;
}

export namespace GetUserWalletsResponse {
    export type AsObject = {
        walletsList: Array<Wallet.AsObject>,
    }
}

export class GetWalletTypesResponse extends jspb.Message { 
    clearWalletTypesList(): void;
    getWalletTypesList(): Array<WalletTypeDetail>;
    setWalletTypesList(value: Array<WalletTypeDetail>): GetWalletTypesResponse;
    addWalletTypes(value?: WalletTypeDetail, index?: number): WalletTypeDetail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWalletTypesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetWalletTypesResponse): GetWalletTypesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWalletTypesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWalletTypesResponse;
    static deserializeBinaryFromReader(message: GetWalletTypesResponse, reader: jspb.BinaryReader): GetWalletTypesResponse;
}

export namespace GetWalletTypesResponse {
    export type AsObject = {
        walletTypesList: Array<WalletTypeDetail.AsObject>,
    }
}

export class WalletSummary extends jspb.Message { 
    getTotalWallets(): number;
    setTotalWallets(value: number): WalletSummary;
    getTotalBalance(): number;
    setTotalBalance(value: number): WalletSummary;
    getTotalTransactions(): number;
    setTotalTransactions(value: number): WalletSummary;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletSummary.AsObject;
    static toObject(includeInstance: boolean, msg: WalletSummary): WalletSummary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletSummary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletSummary;
    static deserializeBinaryFromReader(message: WalletSummary, reader: jspb.BinaryReader): WalletSummary;
}

export namespace WalletSummary {
    export type AsObject = {
        totalWallets: number,
        totalBalance: number,
        totalTransactions: number,
    }
}
