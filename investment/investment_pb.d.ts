// package: investment
// file: investment/investment.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AssetCode extends jspb.Message { 
    getCode(): string;
    setCode(value: string): AssetCode;
    getName(): string;
    setName(value: string): AssetCode;
    getUnit(): string;
    setUnit(value: string): AssetCode;
    getTousd(): number;
    setTousd(value: number): AssetCode;
    getToeur(): number;
    setToeur(value: number): AssetCode;
    getToidr(): number;
    setToidr(value: number): AssetCode;
    getCreatedat(): string;
    setCreatedat(value: string): AssetCode;
    getUpdatedat(): string;
    setUpdatedat(value: string): AssetCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetCode.AsObject;
    static toObject(includeInstance: boolean, msg: AssetCode): AssetCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetCode;
    static deserializeBinaryFromReader(message: AssetCode, reader: jspb.BinaryReader): AssetCode;
}

export namespace AssetCode {
    export type AsObject = {
        code: string,
        name: string,
        unit: string,
        tousd: number,
        toeur: number,
        toidr: number,
        createdat: string,
        updatedat: string,
    }
}

export class Investment extends jspb.Message { 
    getId(): string;
    setId(value: string): Investment;
    getCode(): string;
    setCode(value: string): Investment;
    getUserid(): string;
    setUserid(value: string): Investment;
    getQuantity(): number;
    setQuantity(value: number): Investment;
    getInitialvaluation(): number;
    setInitialvaluation(value: number): Investment;
    getAmount(): number;
    setAmount(value: number): Investment;
    getDate(): string;
    setDate(value: string): Investment;
    getDescription(): string;
    setDescription(value: string): Investment;

    hasAssetcode(): boolean;
    clearAssetcode(): void;
    getAssetcode(): AssetCode | undefined;
    setAssetcode(value?: AssetCode): Investment;
    getCreatedat(): string;
    setCreatedat(value: string): Investment;
    getUpdatedat(): string;
    setUpdatedat(value: string): Investment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Investment.AsObject;
    static toObject(includeInstance: boolean, msg: Investment): Investment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Investment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Investment;
    static deserializeBinaryFromReader(message: Investment, reader: jspb.BinaryReader): Investment;
}

export namespace Investment {
    export type AsObject = {
        id: string,
        code: string,
        userid: string,
        quantity: number,
        initialvaluation: number,
        amount: number,
        date: string,
        description: string,
        assetcode?: AssetCode.AsObject,
        createdat: string,
        updatedat: string,
    }
}

export class InvestmentID extends jspb.Message { 
    getId(): string;
    setId(value: string): InvestmentID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvestmentID.AsObject;
    static toObject(includeInstance: boolean, msg: InvestmentID): InvestmentID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvestmentID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvestmentID;
    static deserializeBinaryFromReader(message: InvestmentID, reader: jspb.BinaryReader): InvestmentID;
}

export namespace InvestmentID {
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

export class GetInvestmentOptions extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): GetInvestmentOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInvestmentOptions.AsObject;
    static toObject(includeInstance: boolean, msg: GetInvestmentOptions): GetInvestmentOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInvestmentOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInvestmentOptions;
    static deserializeBinaryFromReader(message: GetInvestmentOptions, reader: jspb.BinaryReader): GetInvestmentOptions;
}

export namespace GetInvestmentOptions {
    export type AsObject = {
        limit: number,
    }
}
