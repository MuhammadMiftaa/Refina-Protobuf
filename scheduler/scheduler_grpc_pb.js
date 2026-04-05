// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var scheduler_scheduler_pb = require('../scheduler/scheduler_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_scheduler_CreateScheduledJobRequest(arg) {
  if (!(arg instanceof scheduler_scheduler_pb.CreateScheduledJobRequest)) {
    throw new Error('Expected argument of type scheduler.CreateScheduledJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_CreateScheduledJobRequest(buffer_arg) {
  return scheduler_scheduler_pb.CreateScheduledJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scheduler_GetJobExecutionLogsRequest(arg) {
  if (!(arg instanceof scheduler_scheduler_pb.GetJobExecutionLogsRequest)) {
    throw new Error('Expected argument of type scheduler.GetJobExecutionLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_GetJobExecutionLogsRequest(buffer_arg) {
  return scheduler_scheduler_pb.GetJobExecutionLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scheduler_GetJobExecutionLogsResponse(arg) {
  if (!(arg instanceof scheduler_scheduler_pb.GetJobExecutionLogsResponse)) {
    throw new Error('Expected argument of type scheduler.GetJobExecutionLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_GetJobExecutionLogsResponse(buffer_arg) {
  return scheduler_scheduler_pb.GetJobExecutionLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scheduler_GetScheduledJobsRequest(arg) {
  if (!(arg instanceof scheduler_scheduler_pb.GetScheduledJobsRequest)) {
    throw new Error('Expected argument of type scheduler.GetScheduledJobsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_GetScheduledJobsRequest(buffer_arg) {
  return scheduler_scheduler_pb.GetScheduledJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scheduler_GetScheduledJobsResponse(arg) {
  if (!(arg instanceof scheduler_scheduler_pb.GetScheduledJobsResponse)) {
    throw new Error('Expected argument of type scheduler.GetScheduledJobsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_GetScheduledJobsResponse(buffer_arg) {
  return scheduler_scheduler_pb.GetScheduledJobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scheduler_ScheduledJob(arg) {
  if (!(arg instanceof scheduler_scheduler_pb.ScheduledJob)) {
    throw new Error('Expected argument of type scheduler.ScheduledJob');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_ScheduledJob(buffer_arg) {
  return scheduler_scheduler_pb.ScheduledJob.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scheduler_ScheduledJobID(arg) {
  if (!(arg instanceof scheduler_scheduler_pb.ScheduledJobID)) {
    throw new Error('Expected argument of type scheduler.ScheduledJobID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_ScheduledJobID(buffer_arg) {
  return scheduler_scheduler_pb.ScheduledJobID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scheduler_UpdateScheduledJobRequest(arg) {
  if (!(arg instanceof scheduler_scheduler_pb.UpdateScheduledJobRequest)) {
    throw new Error('Expected argument of type scheduler.UpdateScheduledJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_UpdateScheduledJobRequest(buffer_arg) {
  return scheduler_scheduler_pb.UpdateScheduledJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var SchedulerServiceService = exports.SchedulerServiceService = {
  getScheduledJobs: {
    path: '/scheduler.SchedulerService/GetScheduledJobs',
    requestStream: false,
    responseStream: false,
    requestType: scheduler_scheduler_pb.GetScheduledJobsRequest,
    responseType: scheduler_scheduler_pb.GetScheduledJobsResponse,
    requestSerialize: serialize_scheduler_GetScheduledJobsRequest,
    requestDeserialize: deserialize_scheduler_GetScheduledJobsRequest,
    responseSerialize: serialize_scheduler_GetScheduledJobsResponse,
    responseDeserialize: deserialize_scheduler_GetScheduledJobsResponse,
  },
  createScheduledJob: {
    path: '/scheduler.SchedulerService/CreateScheduledJob',
    requestStream: false,
    responseStream: false,
    requestType: scheduler_scheduler_pb.CreateScheduledJobRequest,
    responseType: scheduler_scheduler_pb.ScheduledJob,
    requestSerialize: serialize_scheduler_CreateScheduledJobRequest,
    requestDeserialize: deserialize_scheduler_CreateScheduledJobRequest,
    responseSerialize: serialize_scheduler_ScheduledJob,
    responseDeserialize: deserialize_scheduler_ScheduledJob,
  },
  updateScheduledJob: {
    path: '/scheduler.SchedulerService/UpdateScheduledJob',
    requestStream: false,
    responseStream: false,
    requestType: scheduler_scheduler_pb.UpdateScheduledJobRequest,
    responseType: scheduler_scheduler_pb.ScheduledJob,
    requestSerialize: serialize_scheduler_UpdateScheduledJobRequest,
    requestDeserialize: deserialize_scheduler_UpdateScheduledJobRequest,
    responseSerialize: serialize_scheduler_ScheduledJob,
    responseDeserialize: deserialize_scheduler_ScheduledJob,
  },
  pauseScheduledJob: {
    path: '/scheduler.SchedulerService/PauseScheduledJob',
    requestStream: false,
    responseStream: false,
    requestType: scheduler_scheduler_pb.ScheduledJobID,
    responseType: scheduler_scheduler_pb.ScheduledJob,
    requestSerialize: serialize_scheduler_ScheduledJobID,
    requestDeserialize: deserialize_scheduler_ScheduledJobID,
    responseSerialize: serialize_scheduler_ScheduledJob,
    responseDeserialize: deserialize_scheduler_ScheduledJob,
  },
  resumeScheduledJob: {
    path: '/scheduler.SchedulerService/ResumeScheduledJob',
    requestStream: false,
    responseStream: false,
    requestType: scheduler_scheduler_pb.ScheduledJobID,
    responseType: scheduler_scheduler_pb.ScheduledJob,
    requestSerialize: serialize_scheduler_ScheduledJobID,
    requestDeserialize: deserialize_scheduler_ScheduledJobID,
    responseSerialize: serialize_scheduler_ScheduledJob,
    responseDeserialize: deserialize_scheduler_ScheduledJob,
  },
  deleteScheduledJob: {
    path: '/scheduler.SchedulerService/DeleteScheduledJob',
    requestStream: false,
    responseStream: false,
    requestType: scheduler_scheduler_pb.ScheduledJobID,
    responseType: scheduler_scheduler_pb.ScheduledJob,
    requestSerialize: serialize_scheduler_ScheduledJobID,
    requestDeserialize: deserialize_scheduler_ScheduledJobID,
    responseSerialize: serialize_scheduler_ScheduledJob,
    responseDeserialize: deserialize_scheduler_ScheduledJob,
  },
  getJobExecutionLogs: {
    path: '/scheduler.SchedulerService/GetJobExecutionLogs',
    requestStream: false,
    responseStream: false,
    requestType: scheduler_scheduler_pb.GetJobExecutionLogsRequest,
    responseType: scheduler_scheduler_pb.GetJobExecutionLogsResponse,
    requestSerialize: serialize_scheduler_GetJobExecutionLogsRequest,
    requestDeserialize: deserialize_scheduler_GetJobExecutionLogsRequest,
    responseSerialize: serialize_scheduler_GetJobExecutionLogsResponse,
    responseDeserialize: deserialize_scheduler_GetJobExecutionLogsResponse,
  },
};

exports.SchedulerServiceClient = grpc.makeGenericClientConstructor(SchedulerServiceService, 'SchedulerService');
