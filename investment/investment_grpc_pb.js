// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var investment_investment_pb = require('../investment/investment_pb.js');

function serialize_investment_GetInvestmentOptions(arg) {
  if (!(arg instanceof investment_investment_pb.GetInvestmentOptions)) {
    throw new Error('Expected argument of type investment.GetInvestmentOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_GetInvestmentOptions(buffer_arg) {
  return investment_investment_pb.GetInvestmentOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_investment_Investment(arg) {
  if (!(arg instanceof investment_investment_pb.Investment)) {
    throw new Error('Expected argument of type investment.Investment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_Investment(buffer_arg) {
  return investment_investment_pb.Investment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_investment_UserID(arg) {
  if (!(arg instanceof investment_investment_pb.UserID)) {
    throw new Error('Expected argument of type investment.UserID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_UserID(buffer_arg) {
  return investment_investment_pb.UserID.deserializeBinary(new Uint8Array(buffer_arg));
}


var InvestmentServiceService = exports.InvestmentServiceService = {
  getInvestments: {
    path: '/investment.InvestmentService/GetInvestments',
    requestStream: false,
    responseStream: true,
    requestType: investment_investment_pb.GetInvestmentOptions,
    responseType: investment_investment_pb.Investment,
    requestSerialize: serialize_investment_GetInvestmentOptions,
    requestDeserialize: deserialize_investment_GetInvestmentOptions,
    responseSerialize: serialize_investment_Investment,
    responseDeserialize: deserialize_investment_Investment,
  },
  getUserInvestments: {
    path: '/investment.InvestmentService/GetUserInvestments',
    requestStream: false,
    responseStream: true,
    requestType: investment_investment_pb.UserID,
    responseType: investment_investment_pb.Investment,
    requestSerialize: serialize_investment_UserID,
    requestDeserialize: deserialize_investment_UserID,
    responseSerialize: serialize_investment_Investment,
    responseDeserialize: deserialize_investment_Investment,
  },
};

exports.InvestmentServiceClient = grpc.makeGenericClientConstructor(InvestmentServiceService, 'InvestmentService');
