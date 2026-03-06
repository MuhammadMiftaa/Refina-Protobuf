// package: investment
// file: investment/investment.proto

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
    getCreatedAt(): string;
    setCreatedAt(value: string): AssetCode;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): AssetCode;

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
        createdAt: string,
        updatedAt: string,
    }
}

export class Investment extends jspb.Message { 
    getId(): string;
    setId(value: string): Investment;
    getCode(): string;
    setCode(value: string): Investment;
    getUserId(): string;
    setUserId(value: string): Investment;
    getQuantity(): number;
    setQuantity(value: number): Investment;
    getInitialValuation(): number;
    setInitialValuation(value: number): Investment;
    getAmount(): number;
    setAmount(value: number): Investment;
    getDate(): string;
    setDate(value: string): Investment;
    getDescription(): string;
    setDescription(value: string): Investment;

    hasAsset(): boolean;
    clearAsset(): void;
    getAsset(): AssetCode | undefined;
    setAsset(value?: AssetCode): Investment;
    getCreatedAt(): string;
    setCreatedAt(value: string): Investment;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Investment;

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
        userId: string,
        quantity: number,
        initialValuation: number,
        amount: number,
        date: string,
        description: string,
        asset?: AssetCode.AsObject,
        createdAt: string,
        updatedAt: string,
    }
}

export class InvestmentSold extends jspb.Message { 
    getId(): string;
    setId(value: string): InvestmentSold;
    getInvestmentId(): string;
    setInvestmentId(value: string): InvestmentSold;
    getUserId(): string;
    setUserId(value: string): InvestmentSold;
    getQuantity(): number;
    setQuantity(value: number): InvestmentSold;
    getSellPrice(): number;
    setSellPrice(value: number): InvestmentSold;
    getAmount(): number;
    setAmount(value: number): InvestmentSold;
    getDate(): string;
    setDate(value: string): InvestmentSold;
    getDescription(): string;
    setDescription(value: string): InvestmentSold;
    getDeficit(): number;
    setDeficit(value: number): InvestmentSold;
    getCreatedAt(): string;
    setCreatedAt(value: string): InvestmentSold;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): InvestmentSold;

    hasAsset(): boolean;
    clearAsset(): void;
    getAsset(): AssetCode | undefined;
    setAsset(value?: AssetCode): InvestmentSold;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvestmentSold.AsObject;
    static toObject(includeInstance: boolean, msg: InvestmentSold): InvestmentSold.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvestmentSold, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvestmentSold;
    static deserializeBinaryFromReader(message: InvestmentSold, reader: jspb.BinaryReader): InvestmentSold;
}

export namespace InvestmentSold {
    export type AsObject = {
        id: string,
        investmentId: string,
        userId: string,
        quantity: number,
        sellPrice: number,
        amount: number,
        date: string,
        description: string,
        deficit: number,
        createdAt: string,
        updatedAt: string,
        asset?: AssetCode.AsObject,
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

export class GetUserInvestmentListRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetUserInvestmentListRequest;
    getPage(): number;
    setPage(value: number): GetUserInvestmentListRequest;
    getPageSize(): number;
    setPageSize(value: number): GetUserInvestmentListRequest;
    getSortBy(): string;
    setSortBy(value: string): GetUserInvestmentListRequest;
    getSortOrder(): string;
    setSortOrder(value: string): GetUserInvestmentListRequest;
    getSearch(): string;
    setSearch(value: string): GetUserInvestmentListRequest;
    getCode(): string;
    setCode(value: string): GetUserInvestmentListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserInvestmentListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserInvestmentListRequest): GetUserInvestmentListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserInvestmentListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserInvestmentListRequest;
    static deserializeBinaryFromReader(message: GetUserInvestmentListRequest, reader: jspb.BinaryReader): GetUserInvestmentListRequest;
}

export namespace GetUserInvestmentListRequest {
    export type AsObject = {
        userId: string,
        page: number,
        pageSize: number,
        sortBy: string,
        sortOrder: string,
        search: string,
        code: string,
    }
}

export class GetInvestmentDetailRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetInvestmentDetailRequest;
    getInvestmentId(): string;
    setInvestmentId(value: string): GetInvestmentDetailRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInvestmentDetailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetInvestmentDetailRequest): GetInvestmentDetailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInvestmentDetailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInvestmentDetailRequest;
    static deserializeBinaryFromReader(message: GetInvestmentDetailRequest, reader: jspb.BinaryReader): GetInvestmentDetailRequest;
}

export namespace GetInvestmentDetailRequest {
    export type AsObject = {
        userId: string,
        investmentId: string,
    }
}

export class CreateInvestmentRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): CreateInvestmentRequest;
    getCode(): string;
    setCode(value: string): CreateInvestmentRequest;
    getQuantity(): number;
    setQuantity(value: number): CreateInvestmentRequest;
    getAmount(): number;
    setAmount(value: number): CreateInvestmentRequest;
    getInitialValuation(): number;
    setInitialValuation(value: number): CreateInvestmentRequest;
    getDate(): string;
    setDate(value: string): CreateInvestmentRequest;
    getDescription(): string;
    setDescription(value: string): CreateInvestmentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateInvestmentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateInvestmentRequest): CreateInvestmentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateInvestmentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateInvestmentRequest;
    static deserializeBinaryFromReader(message: CreateInvestmentRequest, reader: jspb.BinaryReader): CreateInvestmentRequest;
}

export namespace CreateInvestmentRequest {
    export type AsObject = {
        userId: string,
        code: string,
        quantity: number,
        amount: number,
        initialValuation: number,
        date: string,
        description: string,
    }
}

export class SellInvestmentRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): SellInvestmentRequest;
    getAssetCode(): string;
    setAssetCode(value: string): SellInvestmentRequest;
    getQuantity(): number;
    setQuantity(value: number): SellInvestmentRequest;
    getAmount(): number;
    setAmount(value: number): SellInvestmentRequest;
    getDate(): string;
    setDate(value: string): SellInvestmentRequest;
    getDescription(): string;
    setDescription(value: string): SellInvestmentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SellInvestmentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SellInvestmentRequest): SellInvestmentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SellInvestmentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SellInvestmentRequest;
    static deserializeBinaryFromReader(message: SellInvestmentRequest, reader: jspb.BinaryReader): SellInvestmentRequest;
}

export namespace SellInvestmentRequest {
    export type AsObject = {
        userId: string,
        assetCode: string,
        quantity: number,
        amount: number,
        date: string,
        description: string,
    }
}

export class GetUserInvestmentListResponse extends jspb.Message { 
    clearInvestmentsList(): void;
    getInvestmentsList(): Array<Investment>;
    setInvestmentsList(value: Array<Investment>): GetUserInvestmentListResponse;
    addInvestments(value?: Investment, index?: number): Investment;
    getTotal(): number;
    setTotal(value: number): GetUserInvestmentListResponse;
    getPage(): number;
    setPage(value: number): GetUserInvestmentListResponse;
    getPageSize(): number;
    setPageSize(value: number): GetUserInvestmentListResponse;
    getTotalPages(): number;
    setTotalPages(value: number): GetUserInvestmentListResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserInvestmentListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserInvestmentListResponse): GetUserInvestmentListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserInvestmentListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserInvestmentListResponse;
    static deserializeBinaryFromReader(message: GetUserInvestmentListResponse, reader: jspb.BinaryReader): GetUserInvestmentListResponse;
}

export namespace GetUserInvestmentListResponse {
    export type AsObject = {
        investmentsList: Array<Investment.AsObject>,
        total: number,
        page: number,
        pageSize: number,
        totalPages: number,
    }
}

export class SellInvestmentResponse extends jspb.Message { 
    clearSoldRecordsList(): void;
    getSoldRecordsList(): Array<InvestmentSold>;
    setSoldRecordsList(value: Array<InvestmentSold>): SellInvestmentResponse;
    addSoldRecords(value?: InvestmentSold, index?: number): InvestmentSold;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SellInvestmentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SellInvestmentResponse): SellInvestmentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SellInvestmentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SellInvestmentResponse;
    static deserializeBinaryFromReader(message: SellInvestmentResponse, reader: jspb.BinaryReader): SellInvestmentResponse;
}

export namespace SellInvestmentResponse {
    export type AsObject = {
        soldRecordsList: Array<InvestmentSold.AsObject>,
    }
}

export class InvestmentSummaryResponse extends jspb.Message { 
    getTotalInvestments(): number;
    setTotalInvestments(value: number): InvestmentSummaryResponse;
    getTotalInvested(): number;
    setTotalInvested(value: number): InvestmentSummaryResponse;
    getTotalCurrentValue(): number;
    setTotalCurrentValue(value: number): InvestmentSummaryResponse;
    getTotalProfitLoss(): number;
    setTotalProfitLoss(value: number): InvestmentSummaryResponse;
    getTotalProfitLossPct(): number;
    setTotalProfitLossPct(value: number): InvestmentSummaryResponse;
    getTotalSoldAmount(): number;
    setTotalSoldAmount(value: number): InvestmentSummaryResponse;
    getTotalRealizedGain(): number;
    setTotalRealizedGain(value: number): InvestmentSummaryResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvestmentSummaryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InvestmentSummaryResponse): InvestmentSummaryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvestmentSummaryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvestmentSummaryResponse;
    static deserializeBinaryFromReader(message: InvestmentSummaryResponse, reader: jspb.BinaryReader): InvestmentSummaryResponse;
}

export namespace InvestmentSummaryResponse {
    export type AsObject = {
        totalInvestments: number,
        totalInvested: number,
        totalCurrentValue: number,
        totalProfitLoss: number,
        totalProfitLossPct: number,
        totalSoldAmount: number,
        totalRealizedGain: number,
    }
}

export class GetAssetCodesResponse extends jspb.Message { 
    clearAssetCodesList(): void;
    getAssetCodesList(): Array<AssetCode>;
    setAssetCodesList(value: Array<AssetCode>): GetAssetCodesResponse;
    addAssetCodes(value?: AssetCode, index?: number): AssetCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAssetCodesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAssetCodesResponse): GetAssetCodesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAssetCodesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAssetCodesResponse;
    static deserializeBinaryFromReader(message: GetAssetCodesResponse, reader: jspb.BinaryReader): GetAssetCodesResponse;
}

export namespace GetAssetCodesResponse {
    export type AsObject = {
        assetCodesList: Array<AssetCode.AsObject>,
    }
}
