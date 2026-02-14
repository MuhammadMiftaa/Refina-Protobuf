// package: wallet
// file: wallet/wallet.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as wallet_wallet_pb from "../wallet/wallet_pb";

interface IWalletServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUserWallets: IWalletServiceService_IGetUserWallets;
    getWalletByID: IWalletServiceService_IGetWalletByID;
    updateWallet: IWalletServiceService_IUpdateWallet;
}

interface IWalletServiceService_IGetUserWallets extends grpc.MethodDefinition<wallet_wallet_pb.UserID, wallet_wallet_pb.Wallet> {
    path: "/wallet.WalletService/GetUserWallets";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<wallet_wallet_pb.UserID>;
    requestDeserialize: grpc.deserialize<wallet_wallet_pb.UserID>;
    responseSerialize: grpc.serialize<wallet_wallet_pb.Wallet>;
    responseDeserialize: grpc.deserialize<wallet_wallet_pb.Wallet>;
}
interface IWalletServiceService_IGetWalletByID extends grpc.MethodDefinition<wallet_wallet_pb.WalletID, wallet_wallet_pb.Wallet> {
    path: "/wallet.WalletService/GetWalletByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wallet_wallet_pb.WalletID>;
    requestDeserialize: grpc.deserialize<wallet_wallet_pb.WalletID>;
    responseSerialize: grpc.serialize<wallet_wallet_pb.Wallet>;
    responseDeserialize: grpc.deserialize<wallet_wallet_pb.Wallet>;
}
interface IWalletServiceService_IUpdateWallet extends grpc.MethodDefinition<wallet_wallet_pb.Wallet, wallet_wallet_pb.Wallet> {
    path: "/wallet.WalletService/UpdateWallet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wallet_wallet_pb.Wallet>;
    requestDeserialize: grpc.deserialize<wallet_wallet_pb.Wallet>;
    responseSerialize: grpc.serialize<wallet_wallet_pb.Wallet>;
    responseDeserialize: grpc.deserialize<wallet_wallet_pb.Wallet>;
}

export const WalletServiceService: IWalletServiceService;

export interface IWalletServiceServer extends grpc.UntypedServiceImplementation {
    getUserWallets: grpc.handleServerStreamingCall<wallet_wallet_pb.UserID, wallet_wallet_pb.Wallet>;
    getWalletByID: grpc.handleUnaryCall<wallet_wallet_pb.WalletID, wallet_wallet_pb.Wallet>;
    updateWallet: grpc.handleUnaryCall<wallet_wallet_pb.Wallet, wallet_wallet_pb.Wallet>;
}

export interface IWalletServiceClient {
    getUserWallets(request: wallet_wallet_pb.UserID, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<wallet_wallet_pb.Wallet>;
    getUserWallets(request: wallet_wallet_pb.UserID, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<wallet_wallet_pb.Wallet>;
    getWalletByID(request: wallet_wallet_pb.WalletID, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    getWalletByID(request: wallet_wallet_pb.WalletID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    getWalletByID(request: wallet_wallet_pb.WalletID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    updateWallet(request: wallet_wallet_pb.Wallet, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    updateWallet(request: wallet_wallet_pb.Wallet, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    updateWallet(request: wallet_wallet_pb.Wallet, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
}

export class WalletServiceClient extends grpc.Client implements IWalletServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getUserWallets(request: wallet_wallet_pb.UserID, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<wallet_wallet_pb.Wallet>;
    public getUserWallets(request: wallet_wallet_pb.UserID, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<wallet_wallet_pb.Wallet>;
    public getWalletByID(request: wallet_wallet_pb.WalletID, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    public getWalletByID(request: wallet_wallet_pb.WalletID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    public getWalletByID(request: wallet_wallet_pb.WalletID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    public updateWallet(request: wallet_wallet_pb.Wallet, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    public updateWallet(request: wallet_wallet_pb.Wallet, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    public updateWallet(request: wallet_wallet_pb.Wallet, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
}
