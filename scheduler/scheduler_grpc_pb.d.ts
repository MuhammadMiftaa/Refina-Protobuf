// package: scheduler
// file: scheduler/scheduler.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as scheduler_scheduler_pb from "../scheduler/scheduler_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ISchedulerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getScheduledJobs: ISchedulerServiceService_IGetScheduledJobs;
    createScheduledJob: ISchedulerServiceService_ICreateScheduledJob;
    updateScheduledJob: ISchedulerServiceService_IUpdateScheduledJob;
    pauseScheduledJob: ISchedulerServiceService_IPauseScheduledJob;
    resumeScheduledJob: ISchedulerServiceService_IResumeScheduledJob;
    deleteScheduledJob: ISchedulerServiceService_IDeleteScheduledJob;
    getJobExecutionLogs: ISchedulerServiceService_IGetJobExecutionLogs;
}

interface ISchedulerServiceService_IGetScheduledJobs extends grpc.MethodDefinition<scheduler_scheduler_pb.GetScheduledJobsRequest, scheduler_scheduler_pb.GetScheduledJobsResponse> {
    path: "/scheduler.SchedulerService/GetScheduledJobs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<scheduler_scheduler_pb.GetScheduledJobsRequest>;
    requestDeserialize: grpc.deserialize<scheduler_scheduler_pb.GetScheduledJobsRequest>;
    responseSerialize: grpc.serialize<scheduler_scheduler_pb.GetScheduledJobsResponse>;
    responseDeserialize: grpc.deserialize<scheduler_scheduler_pb.GetScheduledJobsResponse>;
}
interface ISchedulerServiceService_ICreateScheduledJob extends grpc.MethodDefinition<scheduler_scheduler_pb.CreateScheduledJobRequest, scheduler_scheduler_pb.ScheduledJob> {
    path: "/scheduler.SchedulerService/CreateScheduledJob";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<scheduler_scheduler_pb.CreateScheduledJobRequest>;
    requestDeserialize: grpc.deserialize<scheduler_scheduler_pb.CreateScheduledJobRequest>;
    responseSerialize: grpc.serialize<scheduler_scheduler_pb.ScheduledJob>;
    responseDeserialize: grpc.deserialize<scheduler_scheduler_pb.ScheduledJob>;
}
interface ISchedulerServiceService_IUpdateScheduledJob extends grpc.MethodDefinition<scheduler_scheduler_pb.UpdateScheduledJobRequest, scheduler_scheduler_pb.ScheduledJob> {
    path: "/scheduler.SchedulerService/UpdateScheduledJob";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<scheduler_scheduler_pb.UpdateScheduledJobRequest>;
    requestDeserialize: grpc.deserialize<scheduler_scheduler_pb.UpdateScheduledJobRequest>;
    responseSerialize: grpc.serialize<scheduler_scheduler_pb.ScheduledJob>;
    responseDeserialize: grpc.deserialize<scheduler_scheduler_pb.ScheduledJob>;
}
interface ISchedulerServiceService_IPauseScheduledJob extends grpc.MethodDefinition<scheduler_scheduler_pb.ScheduledJobID, scheduler_scheduler_pb.ScheduledJob> {
    path: "/scheduler.SchedulerService/PauseScheduledJob";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<scheduler_scheduler_pb.ScheduledJobID>;
    requestDeserialize: grpc.deserialize<scheduler_scheduler_pb.ScheduledJobID>;
    responseSerialize: grpc.serialize<scheduler_scheduler_pb.ScheduledJob>;
    responseDeserialize: grpc.deserialize<scheduler_scheduler_pb.ScheduledJob>;
}
interface ISchedulerServiceService_IResumeScheduledJob extends grpc.MethodDefinition<scheduler_scheduler_pb.ScheduledJobID, scheduler_scheduler_pb.ScheduledJob> {
    path: "/scheduler.SchedulerService/ResumeScheduledJob";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<scheduler_scheduler_pb.ScheduledJobID>;
    requestDeserialize: grpc.deserialize<scheduler_scheduler_pb.ScheduledJobID>;
    responseSerialize: grpc.serialize<scheduler_scheduler_pb.ScheduledJob>;
    responseDeserialize: grpc.deserialize<scheduler_scheduler_pb.ScheduledJob>;
}
interface ISchedulerServiceService_IDeleteScheduledJob extends grpc.MethodDefinition<scheduler_scheduler_pb.ScheduledJobID, scheduler_scheduler_pb.ScheduledJob> {
    path: "/scheduler.SchedulerService/DeleteScheduledJob";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<scheduler_scheduler_pb.ScheduledJobID>;
    requestDeserialize: grpc.deserialize<scheduler_scheduler_pb.ScheduledJobID>;
    responseSerialize: grpc.serialize<scheduler_scheduler_pb.ScheduledJob>;
    responseDeserialize: grpc.deserialize<scheduler_scheduler_pb.ScheduledJob>;
}
interface ISchedulerServiceService_IGetJobExecutionLogs extends grpc.MethodDefinition<scheduler_scheduler_pb.GetJobExecutionLogsRequest, scheduler_scheduler_pb.GetJobExecutionLogsResponse> {
    path: "/scheduler.SchedulerService/GetJobExecutionLogs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<scheduler_scheduler_pb.GetJobExecutionLogsRequest>;
    requestDeserialize: grpc.deserialize<scheduler_scheduler_pb.GetJobExecutionLogsRequest>;
    responseSerialize: grpc.serialize<scheduler_scheduler_pb.GetJobExecutionLogsResponse>;
    responseDeserialize: grpc.deserialize<scheduler_scheduler_pb.GetJobExecutionLogsResponse>;
}

export const SchedulerServiceService: ISchedulerServiceService;

export interface ISchedulerServiceServer extends grpc.UntypedServiceImplementation {
    getScheduledJobs: grpc.handleUnaryCall<scheduler_scheduler_pb.GetScheduledJobsRequest, scheduler_scheduler_pb.GetScheduledJobsResponse>;
    createScheduledJob: grpc.handleUnaryCall<scheduler_scheduler_pb.CreateScheduledJobRequest, scheduler_scheduler_pb.ScheduledJob>;
    updateScheduledJob: grpc.handleUnaryCall<scheduler_scheduler_pb.UpdateScheduledJobRequest, scheduler_scheduler_pb.ScheduledJob>;
    pauseScheduledJob: grpc.handleUnaryCall<scheduler_scheduler_pb.ScheduledJobID, scheduler_scheduler_pb.ScheduledJob>;
    resumeScheduledJob: grpc.handleUnaryCall<scheduler_scheduler_pb.ScheduledJobID, scheduler_scheduler_pb.ScheduledJob>;
    deleteScheduledJob: grpc.handleUnaryCall<scheduler_scheduler_pb.ScheduledJobID, scheduler_scheduler_pb.ScheduledJob>;
    getJobExecutionLogs: grpc.handleUnaryCall<scheduler_scheduler_pb.GetJobExecutionLogsRequest, scheduler_scheduler_pb.GetJobExecutionLogsResponse>;
}

export interface ISchedulerServiceClient {
    getScheduledJobs(request: scheduler_scheduler_pb.GetScheduledJobsRequest, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.GetScheduledJobsResponse) => void): grpc.ClientUnaryCall;
    getScheduledJobs(request: scheduler_scheduler_pb.GetScheduledJobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.GetScheduledJobsResponse) => void): grpc.ClientUnaryCall;
    getScheduledJobs(request: scheduler_scheduler_pb.GetScheduledJobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.GetScheduledJobsResponse) => void): grpc.ClientUnaryCall;
    createScheduledJob(request: scheduler_scheduler_pb.CreateScheduledJobRequest, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    createScheduledJob(request: scheduler_scheduler_pb.CreateScheduledJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    createScheduledJob(request: scheduler_scheduler_pb.CreateScheduledJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    updateScheduledJob(request: scheduler_scheduler_pb.UpdateScheduledJobRequest, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    updateScheduledJob(request: scheduler_scheduler_pb.UpdateScheduledJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    updateScheduledJob(request: scheduler_scheduler_pb.UpdateScheduledJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    pauseScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    pauseScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    pauseScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    resumeScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    resumeScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    resumeScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    deleteScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    deleteScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    deleteScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    getJobExecutionLogs(request: scheduler_scheduler_pb.GetJobExecutionLogsRequest, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.GetJobExecutionLogsResponse) => void): grpc.ClientUnaryCall;
    getJobExecutionLogs(request: scheduler_scheduler_pb.GetJobExecutionLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.GetJobExecutionLogsResponse) => void): grpc.ClientUnaryCall;
    getJobExecutionLogs(request: scheduler_scheduler_pb.GetJobExecutionLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.GetJobExecutionLogsResponse) => void): grpc.ClientUnaryCall;
}

export class SchedulerServiceClient extends grpc.Client implements ISchedulerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getScheduledJobs(request: scheduler_scheduler_pb.GetScheduledJobsRequest, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.GetScheduledJobsResponse) => void): grpc.ClientUnaryCall;
    public getScheduledJobs(request: scheduler_scheduler_pb.GetScheduledJobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.GetScheduledJobsResponse) => void): grpc.ClientUnaryCall;
    public getScheduledJobs(request: scheduler_scheduler_pb.GetScheduledJobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.GetScheduledJobsResponse) => void): grpc.ClientUnaryCall;
    public createScheduledJob(request: scheduler_scheduler_pb.CreateScheduledJobRequest, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    public createScheduledJob(request: scheduler_scheduler_pb.CreateScheduledJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    public createScheduledJob(request: scheduler_scheduler_pb.CreateScheduledJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    public updateScheduledJob(request: scheduler_scheduler_pb.UpdateScheduledJobRequest, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    public updateScheduledJob(request: scheduler_scheduler_pb.UpdateScheduledJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    public updateScheduledJob(request: scheduler_scheduler_pb.UpdateScheduledJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    public pauseScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    public pauseScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    public pauseScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    public resumeScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    public resumeScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    public resumeScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    public deleteScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    public deleteScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    public deleteScheduledJob(request: scheduler_scheduler_pb.ScheduledJobID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.ScheduledJob) => void): grpc.ClientUnaryCall;
    public getJobExecutionLogs(request: scheduler_scheduler_pb.GetJobExecutionLogsRequest, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.GetJobExecutionLogsResponse) => void): grpc.ClientUnaryCall;
    public getJobExecutionLogs(request: scheduler_scheduler_pb.GetJobExecutionLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.GetJobExecutionLogsResponse) => void): grpc.ClientUnaryCall;
    public getJobExecutionLogs(request: scheduler_scheduler_pb.GetJobExecutionLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: scheduler_scheduler_pb.GetJobExecutionLogsResponse) => void): grpc.ClientUnaryCall;
}
