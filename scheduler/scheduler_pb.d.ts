// package: scheduler
// file: scheduler/scheduler.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ScheduledJob extends jspb.Message { 
    getId(): string;
    setId(value: string): ScheduledJob;
    getUserId(): string;
    setUserId(value: string): ScheduledJob;
    getScheduleType(): string;
    setScheduleType(value: string): ScheduledJob;
    getJobType(): string;
    setJobType(value: string): ScheduledJob;
    getDescription(): string;
    setDescription(value: string): ScheduledJob;
    getAmount(): number;
    setAmount(value: number): ScheduledJob;
    getWalletId(): string;
    setWalletId(value: string): ScheduledJob;
    getWalletName(): string;
    setWalletName(value: string): ScheduledJob;
    getCategoryId(): string;
    setCategoryId(value: string): ScheduledJob;
    getCategoryName(): string;
    setCategoryName(value: string): ScheduledJob;
    getAssetCode(): string;
    setAssetCode(value: string): ScheduledJob;
    getRepeatInterval(): string;
    setRepeatInterval(value: string): ScheduledJob;
    getRepeatDetail(): string;
    setRepeatDetail(value: string): ScheduledJob;

    hasStartDate(): boolean;
    clearStartDate(): void;
    getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): ScheduledJob;

    hasEndDate(): boolean;
    clearEndDate(): void;
    getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): ScheduledJob;
    getStatus(): string;
    setStatus(value: string): ScheduledJob;

    hasNextExecution(): boolean;
    clearNextExecution(): void;
    getNextExecution(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setNextExecution(value?: google_protobuf_timestamp_pb.Timestamp): ScheduledJob;

    hasLastExecution(): boolean;
    clearLastExecution(): void;
    getLastExecution(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastExecution(value?: google_protobuf_timestamp_pb.Timestamp): ScheduledJob;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ScheduledJob;
    clearExecutionLogsList(): void;
    getExecutionLogsList(): Array<JobExecutionLog>;
    setExecutionLogsList(value: Array<JobExecutionLog>): ScheduledJob;
    addExecutionLogs(value?: JobExecutionLog, index?: number): JobExecutionLog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScheduledJob.AsObject;
    static toObject(includeInstance: boolean, msg: ScheduledJob): ScheduledJob.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScheduledJob, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScheduledJob;
    static deserializeBinaryFromReader(message: ScheduledJob, reader: jspb.BinaryReader): ScheduledJob;
}

export namespace ScheduledJob {
    export type AsObject = {
        id: string,
        userId: string,
        scheduleType: string,
        jobType: string,
        description: string,
        amount: number,
        walletId: string,
        walletName: string,
        categoryId: string,
        categoryName: string,
        assetCode: string,
        repeatInterval: string,
        repeatDetail: string,
        startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        status: string,
        nextExecution?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        lastExecution?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        executionLogsList: Array<JobExecutionLog.AsObject>,
    }
}

export class JobExecutionLog extends jspb.Message { 
    getId(): string;
    setId(value: string): JobExecutionLog;
    getJobId(): string;
    setJobId(value: string): JobExecutionLog;

    hasExecutedAt(): boolean;
    clearExecutedAt(): void;
    getExecutedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExecutedAt(value?: google_protobuf_timestamp_pb.Timestamp): JobExecutionLog;
    getStatus(): string;
    setStatus(value: string): JobExecutionLog;
    getReason(): string;
    setReason(value: string): JobExecutionLog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JobExecutionLog.AsObject;
    static toObject(includeInstance: boolean, msg: JobExecutionLog): JobExecutionLog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JobExecutionLog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JobExecutionLog;
    static deserializeBinaryFromReader(message: JobExecutionLog, reader: jspb.BinaryReader): JobExecutionLog;
}

export namespace JobExecutionLog {
    export type AsObject = {
        id: string,
        jobId: string,
        executedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        status: string,
        reason: string,
    }
}

export class GetScheduledJobsRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetScheduledJobsRequest;
    getStatus(): string;
    setStatus(value: string): GetScheduledJobsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetScheduledJobsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetScheduledJobsRequest): GetScheduledJobsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetScheduledJobsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetScheduledJobsRequest;
    static deserializeBinaryFromReader(message: GetScheduledJobsRequest, reader: jspb.BinaryReader): GetScheduledJobsRequest;
}

export namespace GetScheduledJobsRequest {
    export type AsObject = {
        userId: string,
        status: string,
    }
}

export class GetScheduledJobsResponse extends jspb.Message { 
    clearJobsList(): void;
    getJobsList(): Array<ScheduledJob>;
    setJobsList(value: Array<ScheduledJob>): GetScheduledJobsResponse;
    addJobs(value?: ScheduledJob, index?: number): ScheduledJob;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetScheduledJobsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetScheduledJobsResponse): GetScheduledJobsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetScheduledJobsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetScheduledJobsResponse;
    static deserializeBinaryFromReader(message: GetScheduledJobsResponse, reader: jspb.BinaryReader): GetScheduledJobsResponse;
}

export namespace GetScheduledJobsResponse {
    export type AsObject = {
        jobsList: Array<ScheduledJob.AsObject>,
    }
}

export class CreateScheduledJobRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): CreateScheduledJobRequest;
    getScheduleType(): string;
    setScheduleType(value: string): CreateScheduledJobRequest;
    getJobType(): string;
    setJobType(value: string): CreateScheduledJobRequest;
    getDescription(): string;
    setDescription(value: string): CreateScheduledJobRequest;
    getAmount(): number;
    setAmount(value: number): CreateScheduledJobRequest;
    getWalletId(): string;
    setWalletId(value: string): CreateScheduledJobRequest;
    getCategoryId(): string;
    setCategoryId(value: string): CreateScheduledJobRequest;
    getAssetCode(): string;
    setAssetCode(value: string): CreateScheduledJobRequest;
    getRepeatInterval(): string;
    setRepeatInterval(value: string): CreateScheduledJobRequest;
    getRepeatDetail(): string;
    setRepeatDetail(value: string): CreateScheduledJobRequest;

    hasStartDate(): boolean;
    clearStartDate(): void;
    getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): CreateScheduledJobRequest;

    hasEndDate(): boolean;
    clearEndDate(): void;
    getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): CreateScheduledJobRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateScheduledJobRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateScheduledJobRequest): CreateScheduledJobRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateScheduledJobRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateScheduledJobRequest;
    static deserializeBinaryFromReader(message: CreateScheduledJobRequest, reader: jspb.BinaryReader): CreateScheduledJobRequest;
}

export namespace CreateScheduledJobRequest {
    export type AsObject = {
        userId: string,
        scheduleType: string,
        jobType: string,
        description: string,
        amount: number,
        walletId: string,
        categoryId: string,
        assetCode: string,
        repeatInterval: string,
        repeatDetail: string,
        startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class UpdateScheduledJobRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateScheduledJobRequest;
    getDescription(): string;
    setDescription(value: string): UpdateScheduledJobRequest;
    getAmount(): number;
    setAmount(value: number): UpdateScheduledJobRequest;
    getWalletId(): string;
    setWalletId(value: string): UpdateScheduledJobRequest;
    getCategoryId(): string;
    setCategoryId(value: string): UpdateScheduledJobRequest;
    getAssetCode(): string;
    setAssetCode(value: string): UpdateScheduledJobRequest;
    getRepeatInterval(): string;
    setRepeatInterval(value: string): UpdateScheduledJobRequest;
    getRepeatDetail(): string;
    setRepeatDetail(value: string): UpdateScheduledJobRequest;

    hasStartDate(): boolean;
    clearStartDate(): void;
    getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): UpdateScheduledJobRequest;

    hasEndDate(): boolean;
    clearEndDate(): void;
    getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): UpdateScheduledJobRequest;
    getUserId(): string;
    setUserId(value: string): UpdateScheduledJobRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateScheduledJobRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateScheduledJobRequest): UpdateScheduledJobRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateScheduledJobRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateScheduledJobRequest;
    static deserializeBinaryFromReader(message: UpdateScheduledJobRequest, reader: jspb.BinaryReader): UpdateScheduledJobRequest;
}

export namespace UpdateScheduledJobRequest {
    export type AsObject = {
        id: string,
        description: string,
        amount: number,
        walletId: string,
        categoryId: string,
        assetCode: string,
        repeatInterval: string,
        repeatDetail: string,
        startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        userId: string,
    }
}

export class ScheduledJobID extends jspb.Message { 
    getId(): string;
    setId(value: string): ScheduledJobID;
    getUserId(): string;
    setUserId(value: string): ScheduledJobID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScheduledJobID.AsObject;
    static toObject(includeInstance: boolean, msg: ScheduledJobID): ScheduledJobID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScheduledJobID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScheduledJobID;
    static deserializeBinaryFromReader(message: ScheduledJobID, reader: jspb.BinaryReader): ScheduledJobID;
}

export namespace ScheduledJobID {
    export type AsObject = {
        id: string,
        userId: string,
    }
}

export class GetJobExecutionLogsRequest extends jspb.Message { 
    getJobId(): string;
    setJobId(value: string): GetJobExecutionLogsRequest;
    getLimit(): number;
    setLimit(value: number): GetJobExecutionLogsRequest;
    getOffset(): number;
    setOffset(value: number): GetJobExecutionLogsRequest;
    getUserId(): string;
    setUserId(value: string): GetJobExecutionLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJobExecutionLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetJobExecutionLogsRequest): GetJobExecutionLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJobExecutionLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJobExecutionLogsRequest;
    static deserializeBinaryFromReader(message: GetJobExecutionLogsRequest, reader: jspb.BinaryReader): GetJobExecutionLogsRequest;
}

export namespace GetJobExecutionLogsRequest {
    export type AsObject = {
        jobId: string,
        limit: number,
        offset: number,
        userId: string,
    }
}

export class GetJobExecutionLogsResponse extends jspb.Message { 
    clearLogsList(): void;
    getLogsList(): Array<JobExecutionLog>;
    setLogsList(value: Array<JobExecutionLog>): GetJobExecutionLogsResponse;
    addLogs(value?: JobExecutionLog, index?: number): JobExecutionLog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJobExecutionLogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetJobExecutionLogsResponse): GetJobExecutionLogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJobExecutionLogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJobExecutionLogsResponse;
    static deserializeBinaryFromReader(message: GetJobExecutionLogsResponse, reader: jspb.BinaryReader): GetJobExecutionLogsResponse;
}

export namespace GetJobExecutionLogsResponse {
    export type AsObject = {
        logsList: Array<JobExecutionLog.AsObject>,
    }
}
