// package: transaction
// file: transaction/transaction.proto

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
    getWalletName(): string;
    setWalletName(value: string): Transaction;

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
        walletName: string,
    }
}

export class Attachment extends jspb.Message { 
    getId(): string;
    setId(value: string): Attachment;
    getTransactionId(): string;
    setTransactionId(value: string): Attachment;
    getImage(): string;
    setImage(value: string): Attachment;
    getFormat(): string;
    setFormat(value: string): Attachment;
    getSize(): number;
    setSize(value: number): Attachment;
    getCreatedAt(): string;
    setCreatedAt(value: string): Attachment;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Attachment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Attachment.AsObject;
    static toObject(includeInstance: boolean, msg: Attachment): Attachment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Attachment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Attachment;
    static deserializeBinaryFromReader(message: Attachment, reader: jspb.BinaryReader): Attachment;
}

export namespace Attachment {
    export type AsObject = {
        id: string,
        transactionId: string,
        image: string,
        format: string,
        size: number,
        createdAt: string,
        updatedAt: string,
    }
}

export class TransactionDetail extends jspb.Message { 
    getId(): string;
    setId(value: string): TransactionDetail;
    getWalletId(): string;
    setWalletId(value: string): TransactionDetail;
    getCategoryId(): string;
    setCategoryId(value: string): TransactionDetail;
    getCategoryName(): string;
    setCategoryName(value: string): TransactionDetail;
    getCategoryType(): string;
    setCategoryType(value: string): TransactionDetail;
    getAmount(): number;
    setAmount(value: number): TransactionDetail;
    getTransactionDate(): string;
    setTransactionDate(value: string): TransactionDetail;
    getDescription(): string;
    setDescription(value: string): TransactionDetail;
    getCreatedAt(): string;
    setCreatedAt(value: string): TransactionDetail;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): TransactionDetail;
    getWalletName(): string;
    setWalletName(value: string): TransactionDetail;
    clearAttachmentsList(): void;
    getAttachmentsList(): Array<Attachment>;
    setAttachmentsList(value: Array<Attachment>): TransactionDetail;
    addAttachments(value?: Attachment, index?: number): Attachment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionDetail.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionDetail): TransactionDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionDetail;
    static deserializeBinaryFromReader(message: TransactionDetail, reader: jspb.BinaryReader): TransactionDetail;
}

export namespace TransactionDetail {
    export type AsObject = {
        id: string,
        walletId: string,
        categoryId: string,
        categoryName: string,
        categoryType: string,
        amount: number,
        transactionDate: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        walletName: string,
        attachmentsList: Array<Attachment.AsObject>,
    }
}

export class CategoryGroup extends jspb.Message { 
    getGroupName(): string;
    setGroupName(value: string): CategoryGroup;
    getType(): string;
    setType(value: string): CategoryGroup;
    clearCategoriesList(): void;
    getCategoriesList(): Array<CategoryItem>;
    setCategoriesList(value: Array<CategoryItem>): CategoryGroup;
    addCategories(value?: CategoryItem, index?: number): CategoryItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CategoryGroup.AsObject;
    static toObject(includeInstance: boolean, msg: CategoryGroup): CategoryGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CategoryGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CategoryGroup;
    static deserializeBinaryFromReader(message: CategoryGroup, reader: jspb.BinaryReader): CategoryGroup;
}

export namespace CategoryGroup {
    export type AsObject = {
        groupName: string,
        type: string,
        categoriesList: Array<CategoryItem.AsObject>,
    }
}

export class CategoryItem extends jspb.Message { 
    getId(): string;
    setId(value: string): CategoryItem;
    getName(): string;
    setName(value: string): CategoryItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CategoryItem.AsObject;
    static toObject(includeInstance: boolean, msg: CategoryItem): CategoryItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CategoryItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CategoryItem;
    static deserializeBinaryFromReader(message: CategoryItem, reader: jspb.BinaryReader): CategoryItem;
}

export namespace CategoryItem {
    export type AsObject = {
        id: string,
        name: string,
    }
}

export class TransactionID extends jspb.Message { 
    getId(): string;
    setId(value: string): TransactionID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionID.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionID): TransactionID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionID;
    static deserializeBinaryFromReader(message: TransactionID, reader: jspb.BinaryReader): TransactionID;
}

export namespace TransactionID {
    export type AsObject = {
        id: string,
    }
}

export class AttachmentID extends jspb.Message { 
    getId(): string;
    setId(value: string): AttachmentID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachmentID.AsObject;
    static toObject(includeInstance: boolean, msg: AttachmentID): AttachmentID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttachmentID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachmentID;
    static deserializeBinaryFromReader(message: AttachmentID, reader: jspb.BinaryReader): AttachmentID;
}

export namespace AttachmentID {
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

export class GetUserTransactionsRequest extends jspb.Message { 
    clearWalletIdsList(): void;
    getWalletIdsList(): Array<string>;
    setWalletIdsList(value: Array<string>): GetUserTransactionsRequest;
    addWalletIds(value: string, index?: number): string;
    getPageSize(): number;
    setPageSize(value: number): GetUserTransactionsRequest;
    getSortBy(): string;
    setSortBy(value: string): GetUserTransactionsRequest;
    getSortOrder(): string;
    setSortOrder(value: string): GetUserTransactionsRequest;
    getSearch(): string;
    setSearch(value: string): GetUserTransactionsRequest;
    getWalletId(): string;
    setWalletId(value: string): GetUserTransactionsRequest;
    getCategoryId(): string;
    setCategoryId(value: string): GetUserTransactionsRequest;
    getCategoryType(): string;
    setCategoryType(value: string): GetUserTransactionsRequest;
    getDateFrom(): string;
    setDateFrom(value: string): GetUserTransactionsRequest;
    getDateTo(): string;
    setDateTo(value: string): GetUserTransactionsRequest;
    getCursor(): string;
    setCursor(value: string): GetUserTransactionsRequest;
    getCursorAmount(): number;
    setCursorAmount(value: number): GetUserTransactionsRequest;
    getCursorDate(): string;
    setCursorDate(value: string): GetUserTransactionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserTransactionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserTransactionsRequest): GetUserTransactionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserTransactionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserTransactionsRequest;
    static deserializeBinaryFromReader(message: GetUserTransactionsRequest, reader: jspb.BinaryReader): GetUserTransactionsRequest;
}

export namespace GetUserTransactionsRequest {
    export type AsObject = {
        walletIdsList: Array<string>,
        pageSize: number,
        sortBy: string,
        sortOrder: string,
        search: string,
        walletId: string,
        categoryId: string,
        categoryType: string,
        dateFrom: string,
        dateTo: string,
        cursor: string,
        cursorAmount: number,
        cursorDate: string,
    }
}

export class CreateTransactionRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): CreateTransactionRequest;
    getWalletId(): string;
    setWalletId(value: string): CreateTransactionRequest;
    getCategoryId(): string;
    setCategoryId(value: string): CreateTransactionRequest;
    getAmount(): number;
    setAmount(value: number): CreateTransactionRequest;
    getTransactionDate(): string;
    setTransactionDate(value: string): CreateTransactionRequest;
    getDescription(): string;
    setDescription(value: string): CreateTransactionRequest;
    clearAttachmentsList(): void;
    getAttachmentsList(): Array<string>;
    setAttachmentsList(value: Array<string>): CreateTransactionRequest;
    addAttachments(value: string, index?: number): string;
    getIsWalletNotCreated(): boolean;
    setIsWalletNotCreated(value: boolean): CreateTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionRequest): CreateTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionRequest;
    static deserializeBinaryFromReader(message: CreateTransactionRequest, reader: jspb.BinaryReader): CreateTransactionRequest;
}

export namespace CreateTransactionRequest {
    export type AsObject = {
        userId: string,
        walletId: string,
        categoryId: string,
        amount: number,
        transactionDate: string,
        description: string,
        attachmentsList: Array<string>,
        isWalletNotCreated: boolean,
    }
}

export class CreateFundTransferRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): CreateFundTransferRequest;
    getFromWalletId(): string;
    setFromWalletId(value: string): CreateFundTransferRequest;
    getToWalletId(): string;
    setToWalletId(value: string): CreateFundTransferRequest;
    getAmount(): number;
    setAmount(value: number): CreateFundTransferRequest;
    getAdminFee(): number;
    setAdminFee(value: number): CreateFundTransferRequest;
    getCashOutCategoryId(): string;
    setCashOutCategoryId(value: string): CreateFundTransferRequest;
    getCashInCategoryId(): string;
    setCashInCategoryId(value: string): CreateFundTransferRequest;
    getTransactionDate(): string;
    setTransactionDate(value: string): CreateFundTransferRequest;
    getDescription(): string;
    setDescription(value: string): CreateFundTransferRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFundTransferRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFundTransferRequest): CreateFundTransferRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateFundTransferRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateFundTransferRequest;
    static deserializeBinaryFromReader(message: CreateFundTransferRequest, reader: jspb.BinaryReader): CreateFundTransferRequest;
}

export namespace CreateFundTransferRequest {
    export type AsObject = {
        userId: string,
        fromWalletId: string,
        toWalletId: string,
        amount: number,
        adminFee: number,
        cashOutCategoryId: string,
        cashInCategoryId: string,
        transactionDate: string,
        description: string,
    }
}

export class UpdateTransactionRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateTransactionRequest;
    getWalletId(): string;
    setWalletId(value: string): UpdateTransactionRequest;
    getCategoryId(): string;
    setCategoryId(value: string): UpdateTransactionRequest;
    getAmount(): number;
    setAmount(value: number): UpdateTransactionRequest;
    getTransactionDate(): string;
    setTransactionDate(value: string): UpdateTransactionRequest;
    getDescription(): string;
    setDescription(value: string): UpdateTransactionRequest;
    clearAttachmentActionsList(): void;
    getAttachmentActionsList(): Array<UpdateAttachmentAction>;
    setAttachmentActionsList(value: Array<UpdateAttachmentAction>): UpdateTransactionRequest;
    addAttachmentActions(value?: UpdateAttachmentAction, index?: number): UpdateAttachmentAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTransactionRequest): UpdateTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTransactionRequest;
    static deserializeBinaryFromReader(message: UpdateTransactionRequest, reader: jspb.BinaryReader): UpdateTransactionRequest;
}

export namespace UpdateTransactionRequest {
    export type AsObject = {
        id: string,
        walletId: string,
        categoryId: string,
        amount: number,
        transactionDate: string,
        description: string,
        attachmentActionsList: Array<UpdateAttachmentAction.AsObject>,
    }
}

export class UpdateAttachmentAction extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): UpdateAttachmentAction;
    clearFilesList(): void;
    getFilesList(): Array<string>;
    setFilesList(value: Array<string>): UpdateAttachmentAction;
    addFiles(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAttachmentAction.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAttachmentAction): UpdateAttachmentAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAttachmentAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAttachmentAction;
    static deserializeBinaryFromReader(message: UpdateAttachmentAction, reader: jspb.BinaryReader): UpdateAttachmentAction;
}

export namespace UpdateAttachmentAction {
    export type AsObject = {
        status: string,
        filesList: Array<string>,
    }
}

export class GetCategoriesRequest extends jspb.Message { 
    getType(): string;
    setType(value: string): GetCategoriesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCategoriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCategoriesRequest): GetCategoriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCategoriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCategoriesRequest;
    static deserializeBinaryFromReader(message: GetCategoriesRequest, reader: jspb.BinaryReader): GetCategoriesRequest;
}

export namespace GetCategoriesRequest {
    export type AsObject = {
        type: string,
    }
}

export class CreateAttachmentRequest extends jspb.Message { 
    getTransactionId(): string;
    setTransactionId(value: string): CreateAttachmentRequest;
    getImage(): string;
    setImage(value: string): CreateAttachmentRequest;
    getFormat(): string;
    setFormat(value: string): CreateAttachmentRequest;
    getSize(): number;
    setSize(value: number): CreateAttachmentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAttachmentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAttachmentRequest): CreateAttachmentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAttachmentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAttachmentRequest;
    static deserializeBinaryFromReader(message: CreateAttachmentRequest, reader: jspb.BinaryReader): CreateAttachmentRequest;
}

export namespace CreateAttachmentRequest {
    export type AsObject = {
        transactionId: string,
        image: string,
        format: string,
        size: number,
    }
}

export class GetUserTransactionsResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionDetail>;
    setTransactionsList(value: Array<TransactionDetail>): GetUserTransactionsResponse;
    addTransactions(value?: TransactionDetail, index?: number): TransactionDetail;
    getTotal(): number;
    setTotal(value: number): GetUserTransactionsResponse;
    getPageSize(): number;
    setPageSize(value: number): GetUserTransactionsResponse;
    getNextCursor(): string;
    setNextCursor(value: string): GetUserTransactionsResponse;
    getHasNext(): boolean;
    setHasNext(value: boolean): GetUserTransactionsResponse;
    getNextCursorAmount(): number;
    setNextCursorAmount(value: number): GetUserTransactionsResponse;
    getNextCursorDate(): string;
    setNextCursorDate(value: string): GetUserTransactionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserTransactionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserTransactionsResponse): GetUserTransactionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserTransactionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserTransactionsResponse;
    static deserializeBinaryFromReader(message: GetUserTransactionsResponse, reader: jspb.BinaryReader): GetUserTransactionsResponse;
}

export namespace GetUserTransactionsResponse {
    export type AsObject = {
        transactionsList: Array<TransactionDetail.AsObject>,
        total: number,
        pageSize: number,
        nextCursor: string,
        hasNext: boolean,
        nextCursorAmount: number,
        nextCursorDate: string,
    }
}

export class GetCategoriesResponse extends jspb.Message { 
    clearCategoriesList(): void;
    getCategoriesList(): Array<CategoryGroup>;
    setCategoriesList(value: Array<CategoryGroup>): GetCategoriesResponse;
    addCategories(value?: CategoryGroup, index?: number): CategoryGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCategoriesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetCategoriesResponse): GetCategoriesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCategoriesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCategoriesResponse;
    static deserializeBinaryFromReader(message: GetCategoriesResponse, reader: jspb.BinaryReader): GetCategoriesResponse;
}

export namespace GetCategoriesResponse {
    export type AsObject = {
        categoriesList: Array<CategoryGroup.AsObject>,
    }
}

export class GetAttachmentsResponse extends jspb.Message { 
    clearAttachmentsList(): void;
    getAttachmentsList(): Array<Attachment>;
    setAttachmentsList(value: Array<Attachment>): GetAttachmentsResponse;
    addAttachments(value?: Attachment, index?: number): Attachment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAttachmentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAttachmentsResponse): GetAttachmentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAttachmentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAttachmentsResponse;
    static deserializeBinaryFromReader(message: GetAttachmentsResponse, reader: jspb.BinaryReader): GetAttachmentsResponse;
}

export namespace GetAttachmentsResponse {
    export type AsObject = {
        attachmentsList: Array<Attachment.AsObject>,
    }
}

export class FundTransferResponse extends jspb.Message { 
    getCashOutTransactionId(): string;
    setCashOutTransactionId(value: string): FundTransferResponse;
    getCashInTransactionId(): string;
    setCashInTransactionId(value: string): FundTransferResponse;
    getFromWalletId(): string;
    setFromWalletId(value: string): FundTransferResponse;
    getToWalletId(): string;
    setToWalletId(value: string): FundTransferResponse;
    getAmount(): number;
    setAmount(value: number): FundTransferResponse;
    getDate(): string;
    setDate(value: string): FundTransferResponse;
    getDescription(): string;
    setDescription(value: string): FundTransferResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FundTransferResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FundTransferResponse): FundTransferResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FundTransferResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FundTransferResponse;
    static deserializeBinaryFromReader(message: FundTransferResponse, reader: jspb.BinaryReader): FundTransferResponse;
}

export namespace FundTransferResponse {
    export type AsObject = {
        cashOutTransactionId: string,
        cashInTransactionId: string,
        fromWalletId: string,
        toWalletId: string,
        amount: number,
        date: string,
        description: string,
    }
}

export class NewTransaction extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): NewTransaction;
    getAmount(): number;
    setAmount(value: number): NewTransaction;
    getCategoryId(): string;
    setCategoryId(value: string): NewTransaction;
    getTransactionDate(): string;
    setTransactionDate(value: string): NewTransaction;
    getDescription(): string;
    setDescription(value: string): NewTransaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewTransaction.AsObject;
    static toObject(includeInstance: boolean, msg: NewTransaction): NewTransaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewTransaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewTransaction;
    static deserializeBinaryFromReader(message: NewTransaction, reader: jspb.BinaryReader): NewTransaction;
}

export namespace NewTransaction {
    export type AsObject = {
        walletId: string,
        amount: number,
        categoryId: string,
        transactionDate: string,
        description: string,
    }
}
