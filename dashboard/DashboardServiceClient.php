<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Dashboard;

/**
 * ═══════════════════════════════════════════════
 * Dashboard Analytics Service
 * ═══════════════════════════════════════════════
 *
 */
class DashboardServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Dashboard\GetUserTransactionsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetUserTransactions(\Dashboard\GetUserTransactionsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/dashboard.DashboardService/GetUserTransactions',
        $argument,
        ['\Dashboard\GetUserTransactionsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Dashboard\GetCategoryTransactionsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetCategoryTransactions(\Dashboard\GetCategoryTransactionsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/dashboard.DashboardService/GetCategoryTransactions',
        $argument,
        ['\Dashboard\GetCategoryTransactionsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Dashboard\GetUserBalanceRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetUserBalance(\Dashboard\GetUserBalanceRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/dashboard.DashboardService/GetUserBalance',
        $argument,
        ['\Dashboard\GetUserBalanceResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Dashboard\GetUserFinancialSummaryRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetUserFinancialSummary(\Dashboard\GetUserFinancialSummaryRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/dashboard.DashboardService/GetUserFinancialSummary',
        $argument,
        ['\Dashboard\GetUserFinancialSummaryResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Dashboard\GetUserNetWorthCompositionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetUserNetWorthComposition(\Dashboard\GetUserNetWorthCompositionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/dashboard.DashboardService/GetUserNetWorthComposition',
        $argument,
        ['\Dashboard\NetWorthComposition', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Dashboard\UserID $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetUserWallets(\Dashboard\UserID $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/dashboard.DashboardService/GetUserWallets',
        $argument,
        ['\Dashboard\GetUserWalletsResponse', 'decode'],
        $metadata, $options);
    }

}
