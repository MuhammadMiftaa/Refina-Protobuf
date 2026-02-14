// package: transaction
// file: transaction/transaction.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as transaction_transaction_pb from "../transaction/transaction_pb";

interface ITransactionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUserTransactions: ITransactionServiceService_IGetUserTransactions;
}

interface ITransactionServiceService_IGetUserTransactions extends grpc.MethodDefinition<transaction_transaction_pb.Wallets, transaction_transaction_pb.Transaction> {
    path: "/transaction.TransactionService/GetUserTransactions";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<transaction_transaction_pb.Wallets>;
    requestDeserialize: grpc.deserialize<transaction_transaction_pb.Wallets>;
    responseSerialize: grpc.serialize<transaction_transaction_pb.Transaction>;
    responseDeserialize: grpc.deserialize<transaction_transaction_pb.Transaction>;
}

export const TransactionServiceService: ITransactionServiceService;

export interface ITransactionServiceServer extends grpc.UntypedServiceImplementation {
    getUserTransactions: grpc.handleServerStreamingCall<transaction_transaction_pb.Wallets, transaction_transaction_pb.Transaction>;
}

export interface ITransactionServiceClient {
    getUserTransactions(request: transaction_transaction_pb.Wallets, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<transaction_transaction_pb.Transaction>;
    getUserTransactions(request: transaction_transaction_pb.Wallets, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<transaction_transaction_pb.Transaction>;
}

export class TransactionServiceClient extends grpc.Client implements ITransactionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getUserTransactions(request: transaction_transaction_pb.Wallets, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<transaction_transaction_pb.Transaction>;
    public getUserTransactions(request: transaction_transaction_pb.Wallets, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<transaction_transaction_pb.Transaction>;
}
