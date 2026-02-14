// GENERATED CODE -- DO NOT EDIT!

'use strict';
import * as grpc from '@grpc/grpc-js';
import * as transaction_transaction_pb from '../transaction/transaction_pb.js';

function serialize_transaction_GetTransactionOptions(arg) {
  if (!(arg instanceof transaction_transaction_pb.GetTransactionOptions)) {
    throw new Error('Expected argument of type transaction.GetTransactionOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_GetTransactionOptions(buffer_arg) {
  return transaction_transaction_pb.GetTransactionOptions.deserializeBinary(new Uint8Array(buffer_arg));
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


const TransactionServiceService = {
  getTransactions: {
    path: '/transaction.TransactionService/GetTransactions',
    requestStream: false,
    responseStream: true,
    requestType: transaction_transaction_pb.GetTransactionOptions,
    responseType: transaction_transaction_pb.Transaction,
    requestSerialize: serialize_transaction_GetTransactionOptions,
    requestDeserialize: deserialize_transaction_GetTransactionOptions,
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

const TransactionServiceClient = grpc.makeGenericClientConstructor(TransactionServiceService, 'TransactionService');

// ES Module exports
export { TransactionServiceService,TransactionServiceClient };
