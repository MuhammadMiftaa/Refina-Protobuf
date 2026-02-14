// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var transaction_transaction_pb = require('../transaction/transaction_pb.js');

function serialize_transaction_Options(arg) {
  if (!(arg instanceof transaction_transaction_pb.Options)) {
    throw new Error('Expected argument of type transaction.Options');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_Options(buffer_arg) {
  return transaction_transaction_pb.Options.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_Transaction(arg) {
  if (!(arg instanceof transaction_transaction_pb.Transaction)) {
    throw new Error('Expected argument of type transaction.Transaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_Transaction(buffer_arg) {
  return transaction_transaction_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_Wallets(arg) {
  if (!(arg instanceof transaction_transaction_pb.Wallets)) {
    throw new Error('Expected argument of type transaction.Wallets');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_Wallets(buffer_arg) {
  return transaction_transaction_pb.Wallets.deserializeBinary(new Uint8Array(buffer_arg));
}


var TransactionServiceService = exports.TransactionServiceService = {
  getTransactions: {
    path: '/transaction.TransactionService/GetTransactions',
    requestStream: false,
    responseStream: true,
    requestType: transaction_transaction_pb.Options,
    responseType: transaction_transaction_pb.Transaction,
    requestSerialize: serialize_transaction_Options,
    requestDeserialize: deserialize_transaction_Options,
    responseSerialize: serialize_transaction_Transaction,
    responseDeserialize: deserialize_transaction_Transaction,
  },
  getUserTransactions: {
    path: '/transaction.TransactionService/GetUserTransactions',
    requestStream: false,
    responseStream: true,
    requestType: transaction_transaction_pb.Wallets,
    responseType: transaction_transaction_pb.Transaction,
    requestSerialize: serialize_transaction_Wallets,
    requestDeserialize: deserialize_transaction_Wallets,
    responseSerialize: serialize_transaction_Transaction,
    responseDeserialize: deserialize_transaction_Transaction,
  },
};

exports.TransactionServiceClient = grpc.makeGenericClientConstructor(TransactionServiceService, 'TransactionService');
