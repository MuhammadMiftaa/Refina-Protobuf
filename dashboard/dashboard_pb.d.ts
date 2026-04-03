// package: dashboard
// file: dashboard/dashboard.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

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

export class DateRange extends jspb.Message { 
    getStart(): string;
    setStart(value: string): DateRange;
    getEnd(): string;
    setEnd(value: string): DateRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DateRange.AsObject;
    static toObject(includeInstance: boolean, msg: DateRange): DateRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DateRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DateRange;
    static deserializeBinaryFromReader(message: DateRange, reader: jspb.BinaryReader): DateRange;
}

export namespace DateRange {
    export type AsObject = {
        start: string,
        end: string,
    }
}

export class DateOption extends jspb.Message { 
    getDate(): string;
    setDate(value: string): DateOption;
    getYear(): number;
    setYear(value: number): DateOption;
    getMonth(): number;
    setMonth(value: number): DateOption;
    getDay(): number;
    setDay(value: number): DateOption;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): DateRange | undefined;
    setRange(value?: DateRange): DateOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DateOption.AsObject;
    static toObject(includeInstance: boolean, msg: DateOption): DateOption.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DateOption, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DateOption;
    static deserializeBinaryFromReader(message: DateOption, reader: jspb.BinaryReader): DateOption;
}

export namespace DateOption {
    export type AsObject = {
        date: string,
        year: number,
        month: number,
        day: number,
        range?: DateRange.AsObject,
    }
}

export class GetUserTransactionsRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetUserTransactionsRequest;
    getWalletId(): string;
    setWalletId(value: string): GetUserTransactionsRequest;

    hasDateOption(): boolean;
    clearDateOption(): void;
    getDateOption(): DateOption | undefined;
    setDateOption(value?: DateOption): GetUserTransactionsRequest;

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
        userId: string,
        walletId: string,
        dateOption?: DateOption.AsObject,
    }
}

export class TransactionCategory extends jspb.Message { 
    getCategoryId(): string;
    setCategoryId(value: string): TransactionCategory;
    getCategoryName(): string;
    setCategoryName(value: string): TransactionCategory;
    getCategoryType(): string;
    setCategoryType(value: string): TransactionCategory;
    getTotalAmount(): number;
    setTotalAmount(value: number): TransactionCategory;
    getTotalTransactions(): number;
    setTotalTransactions(value: number): TransactionCategory;
    getParentCategoryName(): string;
    setParentCategoryName(value: string): TransactionCategory;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionCategory.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionCategory): TransactionCategory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionCategory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionCategory;
    static deserializeBinaryFromReader(message: TransactionCategory, reader: jspb.BinaryReader): TransactionCategory;
}

export namespace TransactionCategory {
    export type AsObject = {
        categoryId: string,
        categoryName: string,
        categoryType: string,
        totalAmount: number,
        totalTransactions: number,
        parentCategoryName: string,
    }
}

export class GetUserTransactionsResponse extends jspb.Message { 
    clearCategoriesList(): void;
    getCategoriesList(): Array<TransactionCategory>;
    setCategoriesList(value: Array<TransactionCategory>): GetUserTransactionsResponse;
    addCategories(value?: TransactionCategory, index?: number): TransactionCategory;

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
        categoriesList: Array<TransactionCategory.AsObject>,
    }
}

export class GetCategoryTransactionsRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetCategoryTransactionsRequest;
    getCategoryId(): string;
    setCategoryId(value: string): GetCategoryTransactionsRequest;
    getWalletId(): string;
    setWalletId(value: string): GetCategoryTransactionsRequest;

    hasDateOption(): boolean;
    clearDateOption(): void;
    getDateOption(): DateOption | undefined;
    setDateOption(value?: DateOption): GetCategoryTransactionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCategoryTransactionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCategoryTransactionsRequest): GetCategoryTransactionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCategoryTransactionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCategoryTransactionsRequest;
    static deserializeBinaryFromReader(message: GetCategoryTransactionsRequest, reader: jspb.BinaryReader): GetCategoryTransactionsRequest;
}

export namespace GetCategoryTransactionsRequest {
    export type AsObject = {
        userId: string,
        categoryId: string,
        walletId: string,
        dateOption?: DateOption.AsObject,
    }
}

export class CategoryTransactionItem extends jspb.Message { 
    getTransactionId(): string;
    setTransactionId(value: string): CategoryTransactionItem;
    getDescription(): string;
    setDescription(value: string): CategoryTransactionItem;
    getTransactionDate(): string;
    setTransactionDate(value: string): CategoryTransactionItem;
    getAmount(): number;
    setAmount(value: number): CategoryTransactionItem;
    getWalletName(): string;
    setWalletName(value: string): CategoryTransactionItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CategoryTransactionItem.AsObject;
    static toObject(includeInstance: boolean, msg: CategoryTransactionItem): CategoryTransactionItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CategoryTransactionItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CategoryTransactionItem;
    static deserializeBinaryFromReader(message: CategoryTransactionItem, reader: jspb.BinaryReader): CategoryTransactionItem;
}

export namespace CategoryTransactionItem {
    export type AsObject = {
        transactionId: string,
        description: string,
        transactionDate: string,
        amount: number,
        walletName: string,
    }
}

export class GetCategoryTransactionsResponse extends jspb.Message { 
    getCategoryId(): string;
    setCategoryId(value: string): GetCategoryTransactionsResponse;
    getCategoryName(): string;
    setCategoryName(value: string): GetCategoryTransactionsResponse;
    getCategoryType(): string;
    setCategoryType(value: string): GetCategoryTransactionsResponse;
    getParentCategoryName(): string;
    setParentCategoryName(value: string): GetCategoryTransactionsResponse;
    clearTransactionsList(): void;
    getTransactionsList(): Array<CategoryTransactionItem>;
    setTransactionsList(value: Array<CategoryTransactionItem>): GetCategoryTransactionsResponse;
    addTransactions(value?: CategoryTransactionItem, index?: number): CategoryTransactionItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCategoryTransactionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetCategoryTransactionsResponse): GetCategoryTransactionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCategoryTransactionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCategoryTransactionsResponse;
    static deserializeBinaryFromReader(message: GetCategoryTransactionsResponse, reader: jspb.BinaryReader): GetCategoryTransactionsResponse;
}

export namespace GetCategoryTransactionsResponse {
    export type AsObject = {
        categoryId: string,
        categoryName: string,
        categoryType: string,
        parentCategoryName: string,
        transactionsList: Array<CategoryTransactionItem.AsObject>,
    }
}

export class GetUserBalanceRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetUserBalanceRequest;
    getWalletId(): string;
    setWalletId(value: string): GetUserBalanceRequest;
    getAggregation(): string;
    setAggregation(value: string): GetUserBalanceRequest;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): DateRange | undefined;
    setRange(value?: DateRange): GetUserBalanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserBalanceRequest): GetUserBalanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserBalanceRequest;
    static deserializeBinaryFromReader(message: GetUserBalanceRequest, reader: jspb.BinaryReader): GetUserBalanceRequest;
}

export namespace GetUserBalanceRequest {
    export type AsObject = {
        userId: string,
        walletId: string,
        aggregation: string,
        range?: DateRange.AsObject,
    }
}

export class BalanceSnapshot extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): BalanceSnapshot;
    getWalletName(): string;
    setWalletName(value: string): BalanceSnapshot;
    getDate(): string;
    setDate(value: string): BalanceSnapshot;
    getYear(): number;
    setYear(value: number): BalanceSnapshot;
    getMonth(): number;
    setMonth(value: number): BalanceSnapshot;
    getWeek(): number;
    setWeek(value: number): BalanceSnapshot;
    getDay(): number;
    setDay(value: number): BalanceSnapshot;
    getOpeningBalance(): number;
    setOpeningBalance(value: number): BalanceSnapshot;
    getClosingBalance(): number;
    setClosingBalance(value: number): BalanceSnapshot;
    getTotalIncome(): number;
    setTotalIncome(value: number): BalanceSnapshot;
    getTotalExpense(): number;
    setTotalExpense(value: number): BalanceSnapshot;
    getNetChange(): number;
    setNetChange(value: number): BalanceSnapshot;
    getTransactionCount(): number;
    setTransactionCount(value: number): BalanceSnapshot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BalanceSnapshot.AsObject;
    static toObject(includeInstance: boolean, msg: BalanceSnapshot): BalanceSnapshot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BalanceSnapshot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BalanceSnapshot;
    static deserializeBinaryFromReader(message: BalanceSnapshot, reader: jspb.BinaryReader): BalanceSnapshot;
}

export namespace BalanceSnapshot {
    export type AsObject = {
        walletId: string,
        walletName: string,
        date: string,
        year: number,
        month: number,
        week: number,
        day: number,
        openingBalance: number,
        closingBalance: number,
        totalIncome: number,
        totalExpense: number,
        netChange: number,
        transactionCount: number,
    }
}

export class GetUserBalanceResponse extends jspb.Message { 
    clearSnapshotsList(): void;
    getSnapshotsList(): Array<BalanceSnapshot>;
    setSnapshotsList(value: Array<BalanceSnapshot>): GetUserBalanceResponse;
    addSnapshots(value?: BalanceSnapshot, index?: number): BalanceSnapshot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserBalanceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserBalanceResponse): GetUserBalanceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserBalanceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserBalanceResponse;
    static deserializeBinaryFromReader(message: GetUserBalanceResponse, reader: jspb.BinaryReader): GetUserBalanceResponse;
}

export namespace GetUserBalanceResponse {
    export type AsObject = {
        snapshotsList: Array<BalanceSnapshot.AsObject>,
    }
}

export class GetUserFinancialSummaryRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetUserFinancialSummaryRequest;
    getWalletId(): string;
    setWalletId(value: string): GetUserFinancialSummaryRequest;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): DateRange | undefined;
    setRange(value?: DateRange): GetUserFinancialSummaryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserFinancialSummaryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserFinancialSummaryRequest): GetUserFinancialSummaryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserFinancialSummaryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserFinancialSummaryRequest;
    static deserializeBinaryFromReader(message: GetUserFinancialSummaryRequest, reader: jspb.BinaryReader): GetUserFinancialSummaryRequest;
}

export namespace GetUserFinancialSummaryRequest {
    export type AsObject = {
        userId: string,
        walletId: string,
        range?: DateRange.AsObject,
    }
}

export class CategorySummary extends jspb.Message { 
    getCategoryId(): string;
    setCategoryId(value: string): CategorySummary;
    getCategoryName(): string;
    setCategoryName(value: string): CategorySummary;
    getAmount(): number;
    setAmount(value: number): CategorySummary;
    getPercentage(): number;
    setPercentage(value: number): CategorySummary;
    getTransactionCount(): number;
    setTransactionCount(value: number): CategorySummary;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CategorySummary.AsObject;
    static toObject(includeInstance: boolean, msg: CategorySummary): CategorySummary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CategorySummary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CategorySummary;
    static deserializeBinaryFromReader(message: CategorySummary, reader: jspb.BinaryReader): CategorySummary;
}

export namespace CategorySummary {
    export type AsObject = {
        categoryId: string,
        categoryName: string,
        amount: number,
        percentage: number,
        transactionCount: number,
    }
}

export class WalletSummary extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): WalletSummary;
    getWalletName(): string;
    setWalletName(value: string): WalletSummary;
    getWalletType(): string;
    setWalletType(value: string): WalletSummary;
    getOpeningBalance(): number;
    setOpeningBalance(value: number): WalletSummary;
    getClosingBalance(): number;
    setClosingBalance(value: number): WalletSummary;
    getIncome(): number;
    setIncome(value: number): WalletSummary;
    getExpense(): number;
    setExpense(value: number): WalletSummary;
    getNetChange(): number;
    setNetChange(value: number): WalletSummary;
    getShareOfBalancePct(): number;
    setShareOfBalancePct(value: number): WalletSummary;

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
        walletId: string,
        walletName: string,
        walletType: string,
        openingBalance: number,
        closingBalance: number,
        income: number,
        expense: number,
        netChange: number,
        shareOfBalancePct: number,
    }
}

export class InvestmentSummary extends jspb.Message { 
    getTotalInvested(): number;
    setTotalInvested(value: number): InvestmentSummary;
    getTotalCurrentValuation(): number;
    setTotalCurrentValuation(value: number): InvestmentSummary;
    getTotalSoldAmount(): number;
    setTotalSoldAmount(value: number): InvestmentSummary;
    getTotalDeficit(): number;
    setTotalDeficit(value: number): InvestmentSummary;
    getUnrealizedGain(): number;
    setUnrealizedGain(value: number): InvestmentSummary;
    getRealizedGain(): number;
    setRealizedGain(value: number): InvestmentSummary;
    getInvestmentGrowthPct(): number;
    setInvestmentGrowthPct(value: number): InvestmentSummary;
    getBuyCount(): number;
    setBuyCount(value: number): InvestmentSummary;
    getSellCount(): number;
    setSellCount(value: number): InvestmentSummary;
    getActivePositions(): number;
    setActivePositions(value: number): InvestmentSummary;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvestmentSummary.AsObject;
    static toObject(includeInstance: boolean, msg: InvestmentSummary): InvestmentSummary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvestmentSummary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvestmentSummary;
    static deserializeBinaryFromReader(message: InvestmentSummary, reader: jspb.BinaryReader): InvestmentSummary;
}

export namespace InvestmentSummary {
    export type AsObject = {
        totalInvested: number,
        totalCurrentValuation: number,
        totalSoldAmount: number,
        totalDeficit: number,
        unrealizedGain: number,
        realizedGain: number,
        investmentGrowthPct: number,
        buyCount: number,
        sellCount: number,
        activePositions: number,
    }
}

export class NetWorthSummary extends jspb.Message { 
    getTotal(): number;
    setTotal(value: number): NetWorthSummary;
    getWalletPortion(): number;
    setWalletPortion(value: number): NetWorthSummary;
    getInvestmentPortion(): number;
    setInvestmentPortion(value: number): NetWorthSummary;
    getNetWorthPrev(): number;
    setNetWorthPrev(value: number): NetWorthSummary;
    getNetWorthGrowthPct(): number;
    setNetWorthGrowthPct(value: number): NetWorthSummary;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetWorthSummary.AsObject;
    static toObject(includeInstance: boolean, msg: NetWorthSummary): NetWorthSummary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetWorthSummary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetWorthSummary;
    static deserializeBinaryFromReader(message: NetWorthSummary, reader: jspb.BinaryReader): NetWorthSummary;
}

export namespace NetWorthSummary {
    export type AsObject = {
        total: number,
        walletPortion: number,
        investmentPortion: number,
        netWorthPrev: number,
        netWorthGrowthPct: number,
    }
}

export class FinancialSummary extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): FinancialSummary;
    getPeriodType(): string;
    setPeriodType(value: string): FinancialSummary;
    getPeriodKey(): string;
    setPeriodKey(value: string): FinancialSummary;
    getPeriodStart(): string;
    setPeriodStart(value: string): FinancialSummary;
    getPeriodEnd(): string;
    setPeriodEnd(value: string): FinancialSummary;
    getIncomeNow(): number;
    setIncomeNow(value: number): FinancialSummary;
    getExpenseNow(): number;
    setExpenseNow(value: number): FinancialSummary;
    getProfitNow(): number;
    setProfitNow(value: number): FinancialSummary;
    getBalanceNow(): number;
    setBalanceNow(value: number): FinancialSummary;
    getIncomePrev(): number;
    setIncomePrev(value: number): FinancialSummary;
    getExpensePrev(): number;
    setExpensePrev(value: number): FinancialSummary;
    getProfitPrev(): number;
    setProfitPrev(value: number): FinancialSummary;
    getBalancePrev(): number;
    setBalancePrev(value: number): FinancialSummary;
    getIncomeGrowthPct(): number;
    setIncomeGrowthPct(value: number): FinancialSummary;
    getExpenseGrowthPct(): number;
    setExpenseGrowthPct(value: number): FinancialSummary;
    getProfitGrowthPct(): number;
    setProfitGrowthPct(value: number): FinancialSummary;
    getBalanceGrowthPct(): number;
    setBalanceGrowthPct(value: number): FinancialSummary;
    getSavingsRate(): number;
    setSavingsRate(value: number): FinancialSummary;
    getExpenseToIncomeRatio(): number;
    setExpenseToIncomeRatio(value: number): FinancialSummary;
    getBurnRateDaily(): number;
    setBurnRateDaily(value: number): FinancialSummary;
    getAvgIncomeDaily(): number;
    setAvgIncomeDaily(value: number): FinancialSummary;
    getAvgExpenseDaily(): number;
    setAvgExpenseDaily(value: number): FinancialSummary;
    getRunwayDays(): number;
    setRunwayDays(value: number): FinancialSummary;
    getTotalTransactions(): number;
    setTotalTransactions(value: number): FinancialSummary;
    getIncomeTransactionCount(): number;
    setIncomeTransactionCount(value: number): FinancialSummary;
    getExpenseTransactionCount(): number;
    setExpenseTransactionCount(value: number): FinancialSummary;
    getAvgTransactionAmount(): number;
    setAvgTransactionAmount(value: number): FinancialSummary;
    getLargestIncome(): number;
    setLargestIncome(value: number): FinancialSummary;
    getLargestExpense(): number;
    setLargestExpense(value: number): FinancialSummary;

    hasInvestmentSummary(): boolean;
    clearInvestmentSummary(): void;
    getInvestmentSummary(): InvestmentSummary | undefined;
    setInvestmentSummary(value?: InvestmentSummary): FinancialSummary;

    hasNetWorth(): boolean;
    clearNetWorth(): void;
    getNetWorth(): NetWorthSummary | undefined;
    setNetWorth(value?: NetWorthSummary): FinancialSummary;
    clearTopExpenseCategoriesList(): void;
    getTopExpenseCategoriesList(): Array<CategorySummary>;
    setTopExpenseCategoriesList(value: Array<CategorySummary>): FinancialSummary;
    addTopExpenseCategories(value?: CategorySummary, index?: number): CategorySummary;
    clearTopIncomeCategoriesList(): void;
    getTopIncomeCategoriesList(): Array<CategorySummary>;
    setTopIncomeCategoriesList(value: Array<CategorySummary>): FinancialSummary;
    addTopIncomeCategories(value?: CategorySummary, index?: number): CategorySummary;
    clearWalletSummariesList(): void;
    getWalletSummariesList(): Array<WalletSummary>;
    setWalletSummariesList(value: Array<WalletSummary>): FinancialSummary;
    addWalletSummaries(value?: WalletSummary, index?: number): WalletSummary;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FinancialSummary.AsObject;
    static toObject(includeInstance: boolean, msg: FinancialSummary): FinancialSummary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FinancialSummary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FinancialSummary;
    static deserializeBinaryFromReader(message: FinancialSummary, reader: jspb.BinaryReader): FinancialSummary;
}

export namespace FinancialSummary {
    export type AsObject = {
        userId: string,
        periodType: string,
        periodKey: string,
        periodStart: string,
        periodEnd: string,
        incomeNow: number,
        expenseNow: number,
        profitNow: number,
        balanceNow: number,
        incomePrev: number,
        expensePrev: number,
        profitPrev: number,
        balancePrev: number,
        incomeGrowthPct: number,
        expenseGrowthPct: number,
        profitGrowthPct: number,
        balanceGrowthPct: number,
        savingsRate: number,
        expenseToIncomeRatio: number,
        burnRateDaily: number,
        avgIncomeDaily: number,
        avgExpenseDaily: number,
        runwayDays: number,
        totalTransactions: number,
        incomeTransactionCount: number,
        expenseTransactionCount: number,
        avgTransactionAmount: number,
        largestIncome: number,
        largestExpense: number,
        investmentSummary?: InvestmentSummary.AsObject,
        netWorth?: NetWorthSummary.AsObject,
        topExpenseCategoriesList: Array<CategorySummary.AsObject>,
        topIncomeCategoriesList: Array<CategorySummary.AsObject>,
        walletSummariesList: Array<WalletSummary.AsObject>,
    }
}

export class GetUserFinancialSummaryResponse extends jspb.Message { 
    clearSummariesList(): void;
    getSummariesList(): Array<FinancialSummary>;
    setSummariesList(value: Array<FinancialSummary>): GetUserFinancialSummaryResponse;
    addSummaries(value?: FinancialSummary, index?: number): FinancialSummary;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserFinancialSummaryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserFinancialSummaryResponse): GetUserFinancialSummaryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserFinancialSummaryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserFinancialSummaryResponse;
    static deserializeBinaryFromReader(message: GetUserFinancialSummaryResponse, reader: jspb.BinaryReader): GetUserFinancialSummaryResponse;
}

export namespace GetUserFinancialSummaryResponse {
    export type AsObject = {
        summariesList: Array<FinancialSummary.AsObject>,
    }
}

export class GetUserNetWorthCompositionRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetUserNetWorthCompositionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserNetWorthCompositionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserNetWorthCompositionRequest): GetUserNetWorthCompositionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserNetWorthCompositionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserNetWorthCompositionRequest;
    static deserializeBinaryFromReader(message: GetUserNetWorthCompositionRequest, reader: jspb.BinaryReader): GetUserNetWorthCompositionRequest;
}

export namespace GetUserNetWorthCompositionRequest {
    export type AsObject = {
        userId: string,
    }
}

export class NetWorthSliceDetails extends jspb.Message { 
    getItemCount(): number;
    setItemCount(value: number): NetWorthSliceDetails;
    getDescription(): string;
    setDescription(value: string): NetWorthSliceDetails;
    getUnrealizedGain(): number;
    setUnrealizedGain(value: number): NetWorthSliceDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetWorthSliceDetails.AsObject;
    static toObject(includeInstance: boolean, msg: NetWorthSliceDetails): NetWorthSliceDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetWorthSliceDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetWorthSliceDetails;
    static deserializeBinaryFromReader(message: NetWorthSliceDetails, reader: jspb.BinaryReader): NetWorthSliceDetails;
}

export namespace NetWorthSliceDetails {
    export type AsObject = {
        itemCount: number,
        description: string,
        unrealizedGain: number,
    }
}

export class NetWorthSlice extends jspb.Message { 
    getLabel(): string;
    setLabel(value: string): NetWorthSlice;
    getAmount(): number;
    setAmount(value: number): NetWorthSlice;
    getPercentage(): number;
    setPercentage(value: number): NetWorthSlice;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): NetWorthSliceDetails | undefined;
    setDetails(value?: NetWorthSliceDetails): NetWorthSlice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetWorthSlice.AsObject;
    static toObject(includeInstance: boolean, msg: NetWorthSlice): NetWorthSlice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetWorthSlice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetWorthSlice;
    static deserializeBinaryFromReader(message: NetWorthSlice, reader: jspb.BinaryReader): NetWorthSlice;
}

export namespace NetWorthSlice {
    export type AsObject = {
        label: string,
        amount: number,
        percentage: number,
        details?: NetWorthSliceDetails.AsObject,
    }
}

export class NetWorthComposition extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): NetWorthComposition;
    getTotal(): number;
    setTotal(value: number): NetWorthComposition;
    clearSlicesList(): void;
    getSlicesList(): Array<NetWorthSlice>;
    setSlicesList(value: Array<NetWorthSlice>): NetWorthComposition;
    addSlices(value?: NetWorthSlice, index?: number): NetWorthSlice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetWorthComposition.AsObject;
    static toObject(includeInstance: boolean, msg: NetWorthComposition): NetWorthComposition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetWorthComposition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetWorthComposition;
    static deserializeBinaryFromReader(message: NetWorthComposition, reader: jspb.BinaryReader): NetWorthComposition;
}

export namespace NetWorthComposition {
    export type AsObject = {
        userId: string,
        total: number,
        slicesList: Array<NetWorthSlice.AsObject>,
    }
}

export class DashboardWallet extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): DashboardWallet;
    getUserId(): string;
    setUserId(value: string): DashboardWallet;
    getWalletName(): string;
    setWalletName(value: string): DashboardWallet;
    getWalletType(): string;
    setWalletType(value: string): DashboardWallet;
    getWalletTypeName(): string;
    setWalletTypeName(value: string): DashboardWallet;
    getBalance(): number;
    setBalance(value: number): DashboardWallet;
    getCurrency(): string;
    setCurrency(value: string): DashboardWallet;
    getIcon(): string;
    setIcon(value: string): DashboardWallet;
    getIsActive(): boolean;
    setIsActive(value: boolean): DashboardWallet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DashboardWallet.AsObject;
    static toObject(includeInstance: boolean, msg: DashboardWallet): DashboardWallet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DashboardWallet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DashboardWallet;
    static deserializeBinaryFromReader(message: DashboardWallet, reader: jspb.BinaryReader): DashboardWallet;
}

export namespace DashboardWallet {
    export type AsObject = {
        walletId: string,
        userId: string,
        walletName: string,
        walletType: string,
        walletTypeName: string,
        balance: number,
        currency: string,
        icon: string,
        isActive: boolean,
    }
}

export class GetUserWalletsResponse extends jspb.Message { 
    clearWalletsList(): void;
    getWalletsList(): Array<DashboardWallet>;
    setWalletsList(value: Array<DashboardWallet>): GetUserWalletsResponse;
    addWallets(value?: DashboardWallet, index?: number): DashboardWallet;

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
        walletsList: Array<DashboardWallet.AsObject>,
    }
}
