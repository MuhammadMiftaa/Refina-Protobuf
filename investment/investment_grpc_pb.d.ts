// package: investment
// file: investment/investment.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as investment_investment_pb from "../investment/investment_pb";

interface IInvestmentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getInvestments: IInvestmentServiceService_IGetInvestments;
    getUserInvestments: IInvestmentServiceService_IGetUserInvestments;
}

interface IInvestmentServiceService_IGetInvestments extends grpc.MethodDefinition<investment_investment_pb.GetInvestmentOptions, investment_investment_pb.Investment> {
    path: "/investment.InvestmentService/GetInvestments";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<investment_investment_pb.GetInvestmentOptions>;
    requestDeserialize: grpc.deserialize<investment_investment_pb.GetInvestmentOptions>;
    responseSerialize: grpc.serialize<investment_investment_pb.Investment>;
    responseDeserialize: grpc.deserialize<investment_investment_pb.Investment>;
}
interface IInvestmentServiceService_IGetUserInvestments extends grpc.MethodDefinition<investment_investment_pb.UserID, investment_investment_pb.Investment> {
    path: "/investment.InvestmentService/GetUserInvestments";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<investment_investment_pb.UserID>;
    requestDeserialize: grpc.deserialize<investment_investment_pb.UserID>;
    responseSerialize: grpc.serialize<investment_investment_pb.Investment>;
    responseDeserialize: grpc.deserialize<investment_investment_pb.Investment>;
}

export const InvestmentServiceService: IInvestmentServiceService;

export interface IInvestmentServiceServer extends grpc.UntypedServiceImplementation {
    getInvestments: grpc.handleServerStreamingCall<investment_investment_pb.GetInvestmentOptions, investment_investment_pb.Investment>;
    getUserInvestments: grpc.handleServerStreamingCall<investment_investment_pb.UserID, investment_investment_pb.Investment>;
}

export interface IInvestmentServiceClient {
    getInvestments(request: investment_investment_pb.GetInvestmentOptions, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<investment_investment_pb.Investment>;
    getInvestments(request: investment_investment_pb.GetInvestmentOptions, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<investment_investment_pb.Investment>;
    getUserInvestments(request: investment_investment_pb.UserID, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<investment_investment_pb.Investment>;
    getUserInvestments(request: investment_investment_pb.UserID, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<investment_investment_pb.Investment>;
}

export class InvestmentServiceClient extends grpc.Client implements IInvestmentServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getInvestments(request: investment_investment_pb.GetInvestmentOptions, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<investment_investment_pb.Investment>;
    public getInvestments(request: investment_investment_pb.GetInvestmentOptions, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<investment_investment_pb.Investment>;
    public getUserInvestments(request: investment_investment_pb.UserID, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<investment_investment_pb.Investment>;
    public getUserInvestments(request: investment_investment_pb.UserID, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<investment_investment_pb.Investment>;
}
