<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Investment;

/**
 */
class InvestmentServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Investment\GetInvestmentOptions $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\ServerStreamingCall
     */
    public function GetInvestments(\Investment\GetInvestmentOptions $argument,
      $metadata = [], $options = []) {
        return $this->_serverStreamRequest('/investment.InvestmentService/GetInvestments',
        $argument,
        ['\Investment\Investment', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Investment\UserID $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\ServerStreamingCall
     */
    public function GetUserInvestments(\Investment\UserID $argument,
      $metadata = [], $options = []) {
        return $this->_serverStreamRequest('/investment.InvestmentService/GetUserInvestments',
        $argument,
        ['\Investment\Investment', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Investment\GetUserInvestmentListRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetUserInvestmentList(\Investment\GetUserInvestmentListRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/investment.InvestmentService/GetUserInvestmentList',
        $argument,
        ['\Investment\GetUserInvestmentListResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Investment\GetInvestmentDetailRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetInvestmentDetail(\Investment\GetInvestmentDetailRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/investment.InvestmentService/GetInvestmentDetail',
        $argument,
        ['\Investment\Investment', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Investment\CreateInvestmentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateInvestment(\Investment\CreateInvestmentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/investment.InvestmentService/CreateInvestment',
        $argument,
        ['\Investment\Investment', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Investment\SellInvestmentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SellInvestment(\Investment\SellInvestmentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/investment.InvestmentService/SellInvestment',
        $argument,
        ['\Investment\SellInvestmentResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Investment\UserID $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetInvestmentSummary(\Investment\UserID $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/investment.InvestmentService/GetInvestmentSummary',
        $argument,
        ['\Investment\InvestmentSummaryResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Investment\PBEmpty $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetAssetCodes(\Investment\PBEmpty $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/investment.InvestmentService/GetAssetCodes',
        $argument,
        ['\Investment\GetAssetCodesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * ── Admin Master Data RPCs ──
     * @param \Investment\ListAssetCodesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ListAssetCodes(\Investment\ListAssetCodesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/investment.InvestmentService/ListAssetCodes',
        $argument,
        ['\Investment\ListAssetCodesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Investment\AssetCodeID $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetAssetCodeDetail(\Investment\AssetCodeID $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/investment.InvestmentService/GetAssetCodeDetail',
        $argument,
        ['\Investment\AssetCode', 'decode'],
        $metadata, $options);
    }

}
