// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var dashboard_dashboard_pb = require('../dashboard/dashboard_pb.js');

function serialize_dashboard_GetCategoryTransactionsRequest(arg) {
  if (!(arg instanceof dashboard_dashboard_pb.GetCategoryTransactionsRequest)) {
    throw new Error('Expected argument of type dashboard.GetCategoryTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboard_GetCategoryTransactionsRequest(buffer_arg) {
  return dashboard_dashboard_pb.GetCategoryTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboard_GetCategoryTransactionsResponse(arg) {
  if (!(arg instanceof dashboard_dashboard_pb.GetCategoryTransactionsResponse)) {
    throw new Error('Expected argument of type dashboard.GetCategoryTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboard_GetCategoryTransactionsResponse(buffer_arg) {
  return dashboard_dashboard_pb.GetCategoryTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboard_GetUserBalanceRequest(arg) {
  if (!(arg instanceof dashboard_dashboard_pb.GetUserBalanceRequest)) {
    throw new Error('Expected argument of type dashboard.GetUserBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboard_GetUserBalanceRequest(buffer_arg) {
  return dashboard_dashboard_pb.GetUserBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboard_GetUserBalanceResponse(arg) {
  if (!(arg instanceof dashboard_dashboard_pb.GetUserBalanceResponse)) {
    throw new Error('Expected argument of type dashboard.GetUserBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboard_GetUserBalanceResponse(buffer_arg) {
  return dashboard_dashboard_pb.GetUserBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboard_GetUserFinancialSummaryRequest(arg) {
  if (!(arg instanceof dashboard_dashboard_pb.GetUserFinancialSummaryRequest)) {
    throw new Error('Expected argument of type dashboard.GetUserFinancialSummaryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboard_GetUserFinancialSummaryRequest(buffer_arg) {
  return dashboard_dashboard_pb.GetUserFinancialSummaryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboard_GetUserFinancialSummaryResponse(arg) {
  if (!(arg instanceof dashboard_dashboard_pb.GetUserFinancialSummaryResponse)) {
    throw new Error('Expected argument of type dashboard.GetUserFinancialSummaryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboard_GetUserFinancialSummaryResponse(buffer_arg) {
  return dashboard_dashboard_pb.GetUserFinancialSummaryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboard_GetUserNetWorthCompositionRequest(arg) {
  if (!(arg instanceof dashboard_dashboard_pb.GetUserNetWorthCompositionRequest)) {
    throw new Error('Expected argument of type dashboard.GetUserNetWorthCompositionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboard_GetUserNetWorthCompositionRequest(buffer_arg) {
  return dashboard_dashboard_pb.GetUserNetWorthCompositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboard_GetUserTransactionsRequest(arg) {
  if (!(arg instanceof dashboard_dashboard_pb.GetUserTransactionsRequest)) {
    throw new Error('Expected argument of type dashboard.GetUserTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboard_GetUserTransactionsRequest(buffer_arg) {
  return dashboard_dashboard_pb.GetUserTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboard_GetUserTransactionsResponse(arg) {
  if (!(arg instanceof dashboard_dashboard_pb.GetUserTransactionsResponse)) {
    throw new Error('Expected argument of type dashboard.GetUserTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboard_GetUserTransactionsResponse(buffer_arg) {
  return dashboard_dashboard_pb.GetUserTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboard_GetUserWalletsResponse(arg) {
  if (!(arg instanceof dashboard_dashboard_pb.GetUserWalletsResponse)) {
    throw new Error('Expected argument of type dashboard.GetUserWalletsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboard_GetUserWalletsResponse(buffer_arg) {
  return dashboard_dashboard_pb.GetUserWalletsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboard_NetWorthComposition(arg) {
  if (!(arg instanceof dashboard_dashboard_pb.NetWorthComposition)) {
    throw new Error('Expected argument of type dashboard.NetWorthComposition');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboard_NetWorthComposition(buffer_arg) {
  return dashboard_dashboard_pb.NetWorthComposition.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboard_UserID(arg) {
  if (!(arg instanceof dashboard_dashboard_pb.UserID)) {
    throw new Error('Expected argument of type dashboard.UserID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboard_UserID(buffer_arg) {
  return dashboard_dashboard_pb.UserID.deserializeBinary(new Uint8Array(buffer_arg));
}


// ═══════════════════════════════════════════════
// Dashboard Analytics Service
// ═══════════════════════════════════════════════
//
var DashboardServiceService = exports.DashboardServiceService = {
  getUserTransactions: {
    path: '/dashboard.DashboardService/GetUserTransactions',
    requestStream: false,
    responseStream: false,
    requestType: dashboard_dashboard_pb.GetUserTransactionsRequest,
    responseType: dashboard_dashboard_pb.GetUserTransactionsResponse,
    requestSerialize: serialize_dashboard_GetUserTransactionsRequest,
    requestDeserialize: deserialize_dashboard_GetUserTransactionsRequest,
    responseSerialize: serialize_dashboard_GetUserTransactionsResponse,
    responseDeserialize: deserialize_dashboard_GetUserTransactionsResponse,
  },
  getCategoryTransactions: {
    path: '/dashboard.DashboardService/GetCategoryTransactions',
    requestStream: false,
    responseStream: false,
    requestType: dashboard_dashboard_pb.GetCategoryTransactionsRequest,
    responseType: dashboard_dashboard_pb.GetCategoryTransactionsResponse,
    requestSerialize: serialize_dashboard_GetCategoryTransactionsRequest,
    requestDeserialize: deserialize_dashboard_GetCategoryTransactionsRequest,
    responseSerialize: serialize_dashboard_GetCategoryTransactionsResponse,
    responseDeserialize: deserialize_dashboard_GetCategoryTransactionsResponse,
  },
  getUserBalance: {
    path: '/dashboard.DashboardService/GetUserBalance',
    requestStream: false,
    responseStream: false,
    requestType: dashboard_dashboard_pb.GetUserBalanceRequest,
    responseType: dashboard_dashboard_pb.GetUserBalanceResponse,
    requestSerialize: serialize_dashboard_GetUserBalanceRequest,
    requestDeserialize: deserialize_dashboard_GetUserBalanceRequest,
    responseSerialize: serialize_dashboard_GetUserBalanceResponse,
    responseDeserialize: deserialize_dashboard_GetUserBalanceResponse,
  },
  getUserFinancialSummary: {
    path: '/dashboard.DashboardService/GetUserFinancialSummary',
    requestStream: false,
    responseStream: false,
    requestType: dashboard_dashboard_pb.GetUserFinancialSummaryRequest,
    responseType: dashboard_dashboard_pb.GetUserFinancialSummaryResponse,
    requestSerialize: serialize_dashboard_GetUserFinancialSummaryRequest,
    requestDeserialize: deserialize_dashboard_GetUserFinancialSummaryRequest,
    responseSerialize: serialize_dashboard_GetUserFinancialSummaryResponse,
    responseDeserialize: deserialize_dashboard_GetUserFinancialSummaryResponse,
  },
  getUserNetWorthComposition: {
    path: '/dashboard.DashboardService/GetUserNetWorthComposition',
    requestStream: false,
    responseStream: false,
    requestType: dashboard_dashboard_pb.GetUserNetWorthCompositionRequest,
    responseType: dashboard_dashboard_pb.NetWorthComposition,
    requestSerialize: serialize_dashboard_GetUserNetWorthCompositionRequest,
    requestDeserialize: deserialize_dashboard_GetUserNetWorthCompositionRequest,
    responseSerialize: serialize_dashboard_NetWorthComposition,
    responseDeserialize: deserialize_dashboard_NetWorthComposition,
  },
  getUserWallets: {
    path: '/dashboard.DashboardService/GetUserWallets',
    requestStream: false,
    responseStream: false,
    requestType: dashboard_dashboard_pb.UserID,
    responseType: dashboard_dashboard_pb.GetUserWalletsResponse,
    requestSerialize: serialize_dashboard_UserID,
    requestDeserialize: deserialize_dashboard_UserID,
    responseSerialize: serialize_dashboard_GetUserWalletsResponse,
    responseDeserialize: deserialize_dashboard_GetUserWalletsResponse,
  },
};

exports.DashboardServiceClient = grpc.makeGenericClientConstructor(DashboardServiceService, 'DashboardService');
