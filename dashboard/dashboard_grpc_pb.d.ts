// package: dashboard
// file: dashboard/dashboard.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as dashboard_dashboard_pb from "../dashboard/dashboard_pb";

interface IDashboardServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUserTransactions: IDashboardServiceService_IGetUserTransactions;
    getCategoryTransactions: IDashboardServiceService_IGetCategoryTransactions;
    getUserBalance: IDashboardServiceService_IGetUserBalance;
    getUserFinancialSummary: IDashboardServiceService_IGetUserFinancialSummary;
    getUserNetWorthComposition: IDashboardServiceService_IGetUserNetWorthComposition;
    getUserWallets: IDashboardServiceService_IGetUserWallets;
}

interface IDashboardServiceService_IGetUserTransactions extends grpc.MethodDefinition<dashboard_dashboard_pb.GetUserTransactionsRequest, dashboard_dashboard_pb.GetUserTransactionsResponse> {
    path: "/dashboard.DashboardService/GetUserTransactions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dashboard_dashboard_pb.GetUserTransactionsRequest>;
    requestDeserialize: grpc.deserialize<dashboard_dashboard_pb.GetUserTransactionsRequest>;
    responseSerialize: grpc.serialize<dashboard_dashboard_pb.GetUserTransactionsResponse>;
    responseDeserialize: grpc.deserialize<dashboard_dashboard_pb.GetUserTransactionsResponse>;
}
interface IDashboardServiceService_IGetCategoryTransactions extends grpc.MethodDefinition<dashboard_dashboard_pb.GetCategoryTransactionsRequest, dashboard_dashboard_pb.GetCategoryTransactionsResponse> {
    path: "/dashboard.DashboardService/GetCategoryTransactions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dashboard_dashboard_pb.GetCategoryTransactionsRequest>;
    requestDeserialize: grpc.deserialize<dashboard_dashboard_pb.GetCategoryTransactionsRequest>;
    responseSerialize: grpc.serialize<dashboard_dashboard_pb.GetCategoryTransactionsResponse>;
    responseDeserialize: grpc.deserialize<dashboard_dashboard_pb.GetCategoryTransactionsResponse>;
}
interface IDashboardServiceService_IGetUserBalance extends grpc.MethodDefinition<dashboard_dashboard_pb.GetUserBalanceRequest, dashboard_dashboard_pb.GetUserBalanceResponse> {
    path: "/dashboard.DashboardService/GetUserBalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dashboard_dashboard_pb.GetUserBalanceRequest>;
    requestDeserialize: grpc.deserialize<dashboard_dashboard_pb.GetUserBalanceRequest>;
    responseSerialize: grpc.serialize<dashboard_dashboard_pb.GetUserBalanceResponse>;
    responseDeserialize: grpc.deserialize<dashboard_dashboard_pb.GetUserBalanceResponse>;
}
interface IDashboardServiceService_IGetUserFinancialSummary extends grpc.MethodDefinition<dashboard_dashboard_pb.GetUserFinancialSummaryRequest, dashboard_dashboard_pb.GetUserFinancialSummaryResponse> {
    path: "/dashboard.DashboardService/GetUserFinancialSummary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dashboard_dashboard_pb.GetUserFinancialSummaryRequest>;
    requestDeserialize: grpc.deserialize<dashboard_dashboard_pb.GetUserFinancialSummaryRequest>;
    responseSerialize: grpc.serialize<dashboard_dashboard_pb.GetUserFinancialSummaryResponse>;
    responseDeserialize: grpc.deserialize<dashboard_dashboard_pb.GetUserFinancialSummaryResponse>;
}
interface IDashboardServiceService_IGetUserNetWorthComposition extends grpc.MethodDefinition<dashboard_dashboard_pb.GetUserNetWorthCompositionRequest, dashboard_dashboard_pb.NetWorthComposition> {
    path: "/dashboard.DashboardService/GetUserNetWorthComposition";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dashboard_dashboard_pb.GetUserNetWorthCompositionRequest>;
    requestDeserialize: grpc.deserialize<dashboard_dashboard_pb.GetUserNetWorthCompositionRequest>;
    responseSerialize: grpc.serialize<dashboard_dashboard_pb.NetWorthComposition>;
    responseDeserialize: grpc.deserialize<dashboard_dashboard_pb.NetWorthComposition>;
}
interface IDashboardServiceService_IGetUserWallets extends grpc.MethodDefinition<dashboard_dashboard_pb.UserID, dashboard_dashboard_pb.GetUserWalletsResponse> {
    path: "/dashboard.DashboardService/GetUserWallets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dashboard_dashboard_pb.UserID>;
    requestDeserialize: grpc.deserialize<dashboard_dashboard_pb.UserID>;
    responseSerialize: grpc.serialize<dashboard_dashboard_pb.GetUserWalletsResponse>;
    responseDeserialize: grpc.deserialize<dashboard_dashboard_pb.GetUserWalletsResponse>;
}

export const DashboardServiceService: IDashboardServiceService;

export interface IDashboardServiceServer extends grpc.UntypedServiceImplementation {
    getUserTransactions: grpc.handleUnaryCall<dashboard_dashboard_pb.GetUserTransactionsRequest, dashboard_dashboard_pb.GetUserTransactionsResponse>;
    getCategoryTransactions: grpc.handleUnaryCall<dashboard_dashboard_pb.GetCategoryTransactionsRequest, dashboard_dashboard_pb.GetCategoryTransactionsResponse>;
    getUserBalance: grpc.handleUnaryCall<dashboard_dashboard_pb.GetUserBalanceRequest, dashboard_dashboard_pb.GetUserBalanceResponse>;
    getUserFinancialSummary: grpc.handleUnaryCall<dashboard_dashboard_pb.GetUserFinancialSummaryRequest, dashboard_dashboard_pb.GetUserFinancialSummaryResponse>;
    getUserNetWorthComposition: grpc.handleUnaryCall<dashboard_dashboard_pb.GetUserNetWorthCompositionRequest, dashboard_dashboard_pb.NetWorthComposition>;
    getUserWallets: grpc.handleUnaryCall<dashboard_dashboard_pb.UserID, dashboard_dashboard_pb.GetUserWalletsResponse>;
}

export interface IDashboardServiceClient {
    getUserTransactions(request: dashboard_dashboard_pb.GetUserTransactionsRequest, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserTransactionsResponse) => void): grpc.ClientUnaryCall;
    getUserTransactions(request: dashboard_dashboard_pb.GetUserTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserTransactionsResponse) => void): grpc.ClientUnaryCall;
    getUserTransactions(request: dashboard_dashboard_pb.GetUserTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserTransactionsResponse) => void): grpc.ClientUnaryCall;
    getCategoryTransactions(request: dashboard_dashboard_pb.GetCategoryTransactionsRequest, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetCategoryTransactionsResponse) => void): grpc.ClientUnaryCall;
    getCategoryTransactions(request: dashboard_dashboard_pb.GetCategoryTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetCategoryTransactionsResponse) => void): grpc.ClientUnaryCall;
    getCategoryTransactions(request: dashboard_dashboard_pb.GetCategoryTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetCategoryTransactionsResponse) => void): grpc.ClientUnaryCall;
    getUserBalance(request: dashboard_dashboard_pb.GetUserBalanceRequest, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserBalanceResponse) => void): grpc.ClientUnaryCall;
    getUserBalance(request: dashboard_dashboard_pb.GetUserBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserBalanceResponse) => void): grpc.ClientUnaryCall;
    getUserBalance(request: dashboard_dashboard_pb.GetUserBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserBalanceResponse) => void): grpc.ClientUnaryCall;
    getUserFinancialSummary(request: dashboard_dashboard_pb.GetUserFinancialSummaryRequest, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserFinancialSummaryResponse) => void): grpc.ClientUnaryCall;
    getUserFinancialSummary(request: dashboard_dashboard_pb.GetUserFinancialSummaryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserFinancialSummaryResponse) => void): grpc.ClientUnaryCall;
    getUserFinancialSummary(request: dashboard_dashboard_pb.GetUserFinancialSummaryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserFinancialSummaryResponse) => void): grpc.ClientUnaryCall;
    getUserNetWorthComposition(request: dashboard_dashboard_pb.GetUserNetWorthCompositionRequest, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.NetWorthComposition) => void): grpc.ClientUnaryCall;
    getUserNetWorthComposition(request: dashboard_dashboard_pb.GetUserNetWorthCompositionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.NetWorthComposition) => void): grpc.ClientUnaryCall;
    getUserNetWorthComposition(request: dashboard_dashboard_pb.GetUserNetWorthCompositionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.NetWorthComposition) => void): grpc.ClientUnaryCall;
    getUserWallets(request: dashboard_dashboard_pb.UserID, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserWalletsResponse) => void): grpc.ClientUnaryCall;
    getUserWallets(request: dashboard_dashboard_pb.UserID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserWalletsResponse) => void): grpc.ClientUnaryCall;
    getUserWallets(request: dashboard_dashboard_pb.UserID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserWalletsResponse) => void): grpc.ClientUnaryCall;
}

export class DashboardServiceClient extends grpc.Client implements IDashboardServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getUserTransactions(request: dashboard_dashboard_pb.GetUserTransactionsRequest, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getUserTransactions(request: dashboard_dashboard_pb.GetUserTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getUserTransactions(request: dashboard_dashboard_pb.GetUserTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getCategoryTransactions(request: dashboard_dashboard_pb.GetCategoryTransactionsRequest, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetCategoryTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getCategoryTransactions(request: dashboard_dashboard_pb.GetCategoryTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetCategoryTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getCategoryTransactions(request: dashboard_dashboard_pb.GetCategoryTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetCategoryTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getUserBalance(request: dashboard_dashboard_pb.GetUserBalanceRequest, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserBalanceResponse) => void): grpc.ClientUnaryCall;
    public getUserBalance(request: dashboard_dashboard_pb.GetUserBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserBalanceResponse) => void): grpc.ClientUnaryCall;
    public getUserBalance(request: dashboard_dashboard_pb.GetUserBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserBalanceResponse) => void): grpc.ClientUnaryCall;
    public getUserFinancialSummary(request: dashboard_dashboard_pb.GetUserFinancialSummaryRequest, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserFinancialSummaryResponse) => void): grpc.ClientUnaryCall;
    public getUserFinancialSummary(request: dashboard_dashboard_pb.GetUserFinancialSummaryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserFinancialSummaryResponse) => void): grpc.ClientUnaryCall;
    public getUserFinancialSummary(request: dashboard_dashboard_pb.GetUserFinancialSummaryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserFinancialSummaryResponse) => void): grpc.ClientUnaryCall;
    public getUserNetWorthComposition(request: dashboard_dashboard_pb.GetUserNetWorthCompositionRequest, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.NetWorthComposition) => void): grpc.ClientUnaryCall;
    public getUserNetWorthComposition(request: dashboard_dashboard_pb.GetUserNetWorthCompositionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.NetWorthComposition) => void): grpc.ClientUnaryCall;
    public getUserNetWorthComposition(request: dashboard_dashboard_pb.GetUserNetWorthCompositionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.NetWorthComposition) => void): grpc.ClientUnaryCall;
    public getUserWallets(request: dashboard_dashboard_pb.UserID, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserWalletsResponse) => void): grpc.ClientUnaryCall;
    public getUserWallets(request: dashboard_dashboard_pb.UserID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserWalletsResponse) => void): grpc.ClientUnaryCall;
    public getUserWallets(request: dashboard_dashboard_pb.UserID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dashboard_dashboard_pb.GetUserWalletsResponse) => void): grpc.ClientUnaryCall;
}
