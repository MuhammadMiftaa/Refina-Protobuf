<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Scheduler;

/**
 */
class SchedulerServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Scheduler\GetScheduledJobsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetScheduledJobs(\Scheduler\GetScheduledJobsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/scheduler.SchedulerService/GetScheduledJobs',
        $argument,
        ['\Scheduler\GetScheduledJobsResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Scheduler\CreateScheduledJobRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateScheduledJob(\Scheduler\CreateScheduledJobRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/scheduler.SchedulerService/CreateScheduledJob',
        $argument,
        ['\Scheduler\ScheduledJob', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Scheduler\UpdateScheduledJobRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdateScheduledJob(\Scheduler\UpdateScheduledJobRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/scheduler.SchedulerService/UpdateScheduledJob',
        $argument,
        ['\Scheduler\ScheduledJob', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Scheduler\ScheduledJobID $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function PauseScheduledJob(\Scheduler\ScheduledJobID $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/scheduler.SchedulerService/PauseScheduledJob',
        $argument,
        ['\Scheduler\ScheduledJob', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Scheduler\ScheduledJobID $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function ResumeScheduledJob(\Scheduler\ScheduledJobID $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/scheduler.SchedulerService/ResumeScheduledJob',
        $argument,
        ['\Scheduler\ScheduledJob', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Scheduler\ScheduledJobID $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteScheduledJob(\Scheduler\ScheduledJobID $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/scheduler.SchedulerService/DeleteScheduledJob',
        $argument,
        ['\Scheduler\ScheduledJob', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Scheduler\GetJobExecutionLogsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetJobExecutionLogs(\Scheduler\GetJobExecutionLogsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/scheduler.SchedulerService/GetJobExecutionLogs',
        $argument,
        ['\Scheduler\GetJobExecutionLogsResponse', 'decode'],
        $metadata, $options);
    }

}
