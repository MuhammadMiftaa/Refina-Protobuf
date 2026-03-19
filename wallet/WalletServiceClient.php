<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Wallet;

/**
 */
class WalletServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Wallet\GetWalletOptions $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\ServerStreamingCall
     */
    public function GetWallets(\Wallet\GetWalletOptions $argument,
      $metadata = [], $options = []) {
        return $this->_serverStreamRequest('/wallet.WalletService/GetWallets',
        $argument,
        ['\Wallet\Wallet', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Wallet\UserID $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetUserWallets(\Wallet\UserID $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/wallet.WalletService/GetUserWallets',
        $argument,
        ['\Wallet\GetUserWalletsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Wallet\WalletID $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetWalletByID(\Wallet\WalletID $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/wallet.WalletService/GetWalletByID',
        $argument,
        ['\Wallet\Wallet', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Wallet\CreateWalletRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateWallet(\Wallet\CreateWalletRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/wallet.WalletService/CreateWallet',
        $argument,
        ['\Wallet\Wallet', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Wallet\UpdateWalletRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdateWallet(\Wallet\UpdateWalletRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/wallet.WalletService/UpdateWallet',
        $argument,
        ['\Wallet\Wallet', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Wallet\WalletID $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteWallet(\Wallet\WalletID $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/wallet.WalletService/DeleteWallet',
        $argument,
        ['\Wallet\Wallet', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Wallet\PBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetWalletTypes(\Wallet\PBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/wallet.WalletService/GetWalletTypes',
        $argument,
        ['\Wallet\GetWalletTypesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Wallet\UserID $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetWalletSummary(\Wallet\UserID $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/wallet.WalletService/GetWalletSummary',
        $argument,
        ['\Wallet\WalletSummary', 'decode'],
        $metadata, $options);
    }

    /**
     * ── Admin Master Data RPCs ──
     * @param \Wallet\ListWalletTypesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ListWalletTypes(\Wallet\ListWalletTypesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/wallet.WalletService/ListWalletTypes',
        $argument,
        ['\Wallet\ListWalletTypesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Wallet\WalletTypeID $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetWalletTypeDetail(\Wallet\WalletTypeID $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/wallet.WalletService/GetWalletTypeDetail',
        $argument,
        ['\Wallet\WalletTypeDetail', 'decode'],
        $metadata, $options);
    }

}
