// Import necessary dependencies
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

/**
 * @class RabbitmqService
 * @description Service for interacting with RabbitMQ microservice client.
 */
@Injectable()
export class RabbitmqService {

  /**
   * @constructor
   * @param {ClientProxy} clientProxy - The RabbitMQ client proxy instance.
   * @description Constructs an instance of the RabbitmqService.
   * It injects the RabbitMQ client proxy into the service.
   */
  constructor(
    @Inject('RABBITMQ_CLIENT') private readonly clientProxy: ClientProxy,
  ) {}

  /**
   * @method sendMessage
   * @param {string} queue - The name of the queue to send the message to.
   * @param {string} message - The message to be sent.
   * @returns {Promise<void>} - A promise that resolves when the message is sent successfully.
   * @description Sends a message to the specified queue using the RabbitMQ client proxy.
   * It emits the message to the specified queue and returns a promise that resolves when the message is sent.
   */
  sendMessage(queue: string, message: string): Promise<void> {
    return lastValueFrom(this.clientProxy.emit(queue, message));
  }

  
}
