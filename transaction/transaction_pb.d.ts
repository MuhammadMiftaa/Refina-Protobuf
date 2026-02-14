// package: transaction
// file: transaction/transaction.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Transaction extends jspb.Message { 
    getId(): string;
    setId(value: string): Transaction;
    getUserId(): string;
    setUserId(value: string): Transaction;
    getWalletId(): string;
    setWalletId(value: string): Transaction;
    getAmount(): number;
    setAmount(value: number): Transaction;
    getCategoryId(): string;
    setCategoryId(value: string): Transaction;
    getCategoryName(): string;
    setCategoryName(value: string): Transaction;
    getCategoryType(): string;
    setCategoryType(value: string): Transaction;
    getTransactionDate(): string;
    setTransactionDate(value: string): Transaction;
    getDescription(): string;
    setDescription(value: string): Transaction;
    getCreatedAt(): string;
    setCreatedAt(value: string): Transaction;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Transaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transaction.AsObject;
    static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transaction;
    static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
    export type AsObject = {
        id: string,
        userId: string,
        walletId: string,
        amount: number,
        categoryId: string,
        categoryName: string,
        categoryType: string,
        transactionDate: string,
        description: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class Wallets extends jspb.Message { 
    clearWalletIdList(): void;
    getWalletIdList(): Array<string>;
    setWalletIdList(value: Array<string>): Wallets;
    addWalletId(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Wallets.AsObject;
    static toObject(includeInstance: boolean, msg: Wallets): Wallets.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Wallets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Wallets;
    static deserializeBinaryFromReader(message: Wallets, reader: jspb.BinaryReader): Wallets;
}

export namespace Wallets {
    export type AsObject = {
        walletIdList: Array<string>,
    }
}

export class GetTransactionOptions extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): GetTransactionOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTransactionOptions.AsObject;
    static toObject(includeInstance: boolean, msg: GetTransactionOptions): GetTransactionOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTransactionOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTransactionOptions;
    static deserializeBinaryFromReader(message: GetTransactionOptions, reader: jspb.BinaryReader): GetTransactionOptions;
}

export namespace GetTransactionOptions {
    export type AsObject = {
        limit: number,
    }
}
