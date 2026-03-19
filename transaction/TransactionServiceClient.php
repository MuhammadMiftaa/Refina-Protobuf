<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Transaction;

/**
 */
class TransactionServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * ── Transaction RPCs ──
     * @param \Transaction\GetTransactionOptions $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\ServerStreamingCall
     */
    public function GetTransactions(\Transaction\GetTransactionOptions $argument,
      $metadata = [], $options = []) {
        return $this->_serverStreamRequest('/transaction.TransactionService/GetTransactions',
        $argument,
        ['\Transaction\Transaction', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Transaction\GetUserTransactionsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetUserTransactions(\Transaction\GetUserTransactionsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/transaction.TransactionService/GetUserTransactions',
        $argument,
        ['\Transaction\GetUserTransactionsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Transaction\TransactionID $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetTransactionByID(\Transaction\TransactionID $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/transaction.TransactionService/GetTransactionByID',
        $argument,
        ['\Transaction\TransactionDetail', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Transaction\CreateTransactionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateTransaction(\Transaction\CreateTransactionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/transaction.TransactionService/CreateTransaction',
        $argument,
        ['\Transaction\TransactionDetail', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Transaction\CreateFundTransferRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateFundTransfer(\Transaction\CreateFundTransferRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/transaction.TransactionService/CreateFundTransfer',
        $argument,
        ['\Transaction\FundTransferResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Transaction\UpdateTransactionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdateTransaction(\Transaction\UpdateTransactionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/transaction.TransactionService/UpdateTransaction',
        $argument,
        ['\Transaction\TransactionDetail', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Transaction\TransactionID $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteTransaction(\Transaction\TransactionID $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/transaction.TransactionService/DeleteTransaction',
        $argument,
        ['\Transaction\TransactionDetail', 'decode'],
        $metadata, $options);
    }

    /**
     * ── Category RPCs ──
     * @param \Transaction\GetCategoriesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetCategories(\Transaction\GetCategoriesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/transaction.TransactionService/GetCategories',
        $argument,
        ['\Transaction\GetCategoriesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * ── Admin Master Data RPCs ──
     * @param \Transaction\ListCategoriesRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ListCategories(\Transaction\ListCategoriesRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/transaction.TransactionService/ListCategories',
        $argument,
        ['\Transaction\ListCategoriesResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Transaction\CategoryID $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetCategoryDetail(\Transaction\CategoryID $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/transaction.TransactionService/GetCategoryDetail',
        $argument,
        ['\Transaction\CategoryDetail', 'decode'],
        $metadata, $options);
    }

    /**
     * ── Attachment RPCs ──
     * @param \Transaction\TransactionID $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetAttachmentsByTransactionID(\Transaction\TransactionID $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/transaction.TransactionService/GetAttachmentsByTransactionID',
        $argument,
        ['\Transaction\GetAttachmentsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Transaction\CreateAttachmentRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateAttachment(\Transaction\CreateAttachmentRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/transaction.TransactionService/CreateAttachment',
        $argument,
        ['\Transaction\Attachment', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Transaction\AttachmentID $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteAttachment(\Transaction\AttachmentID $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/transaction.TransactionService/DeleteAttachment',
        $argument,
        ['\Transaction\Attachment', 'decode'],
        $metadata, $options);
    }

}
