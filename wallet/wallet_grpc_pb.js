// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var wallet_wallet_pb = require('../wallet/wallet_pb.js');

function serialize_wallet_GetWalletOptions(arg) {
  if (!(arg instanceof wallet_wallet_pb.GetWalletOptions)) {
    throw new Error('Expected argument of type wallet.GetWalletOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wallet_GetWalletOptions(buffer_arg) {
  return wallet_wallet_pb.GetWalletOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wallet_UserID(arg) {
  if (!(arg instanceof wallet_wallet_pb.UserID)) {
    throw new Error('Expected argument of type wallet.UserID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wallet_UserID(buffer_arg) {
  return wallet_wallet_pb.UserID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wallet_Wallet(arg) {
  if (!(arg instanceof wallet_wallet_pb.Wallet)) {
    throw new Error('Expected argument of type wallet.Wallet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wallet_Wallet(buffer_arg) {
  return wallet_wallet_pb.Wallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wallet_WalletID(arg) {
  if (!(arg instanceof wallet_wallet_pb.WalletID)) {
    throw new Error('Expected argument of type wallet.WalletID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wallet_WalletID(buffer_arg) {
  return wallet_wallet_pb.WalletID.deserializeBinary(new Uint8Array(buffer_arg));
}


var WalletServiceService = exports.WalletServiceService = {
  getWallets: {
    path: '/wallet.WalletService/GetWallets',
    requestStream: false,
    responseStream: true,
    requestType: wallet_wallet_pb.GetWalletOptions,
    responseType: wallet_wallet_pb.Wallet,
    requestSerialize: serialize_wallet_GetWalletOptions,
    requestDeserialize: deserialize_wallet_GetWalletOptions,
    responseSerialize: serialize_wallet_Wallet,
    responseDeserialize: deserialize_wallet_Wallet,
  },
  getUserWallets: {
    path: '/wallet.WalletService/GetUserWallets',
    requestStream: false,
    responseStream: true,
    requestType: wallet_wallet_pb.UserID,
    responseType: wallet_wallet_pb.Wallet,
    requestSerialize: serialize_wallet_UserID,
    requestDeserialize: deserialize_wallet_UserID,
    responseSerialize: serialize_wallet_Wallet,
    responseDeserialize: deserialize_wallet_Wallet,
  },
  getWalletByID: {
    path: '/wallet.WalletService/GetWalletByID',
    requestStream: false,
    responseStream: false,
    requestType: wallet_wallet_pb.WalletID,
    responseType: wallet_wallet_pb.Wallet,
    requestSerialize: serialize_wallet_WalletID,
    requestDeserialize: deserialize_wallet_WalletID,
    responseSerialize: serialize_wallet_Wallet,
    responseDeserialize: deserialize_wallet_Wallet,
  },
  updateWallet: {
    path: '/wallet.WalletService/UpdateWallet',
    requestStream: false,
    responseStream: false,
    requestType: wallet_wallet_pb.Wallet,
    responseType: wallet_wallet_pb.Wallet,
    requestSerialize: serialize_wallet_Wallet,
    requestDeserialize: deserialize_wallet_Wallet,
    responseSerialize: serialize_wallet_Wallet,
    responseDeserialize: deserialize_wallet_Wallet,
  },
};

exports.WalletServiceClient = grpc.makeGenericClientConstructor(WalletServiceService, 'WalletService');
