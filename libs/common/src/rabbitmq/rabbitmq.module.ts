// Import necessary dependencies
import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitmqService } from './rabbitmq.service';

/**
 * @interface RmqModuleOptions
 * @description Interface defining the options for configuring the RabbitMQ module.
 */
interface RmqModuleOptions {
  name: string;
}

/**
 * @module RmqModule
 * @description Module for configuring RabbitMQ microservice client.
 */
@Module({
  providers: [RabbitmqService],
  exports: [RabbitmqService],
})
export class RmqModule {
  /**
   * @method register
   * @param {RmqModuleOptions} options - The options for configuring the RabbitMQ module.
   * @returns {DynamicModule} - The dynamically generated module configuration.
   * @description Registers the RabbitMQ module with the specified options.
   * It returns a dynamically generated module configuration that can be used for importing the module.
   */
  static register({ name }: RmqModuleOptions): DynamicModule {
    return {
      module: RmqModule,
      imports: [
        /**
         * @module ClientsModule
         * @description Module for creating microservice clients.
         * It uses the `registerAsync` method to configure the RabbitMQ client asynchronously.
         */
        ClientsModule.registerAsync([
          {
            name: 'RABBITMQ_CLIENT',
            /**
             * @method useFactory
             * @param {ConfigService} configService - The ConfigService instance used for accessing configuration values.
             * @returns {Object} - The RabbitMQ client configuration object.
             * @description Factory function for creating the RabbitMQ client configuration object.
             * It retrieves the RabbitMQ URI and queue name from the configuration using the ConfigService.
             */
            useFactory: (configService: ConfigService) => ({
              transport: Transport.RMQ,
              options: {
                urls: [configService.get<string>('RABBIT_MQ_URI')],
                queue: configService.get<string>(`RABBIT_MQ_${name}_QUEUE`),
                noAck: true,
                persistent: true
              },
            }),
            /**
             * @property {Array} inject
             * @description An array of dependencies to inject into the factory function.
             * In this case, it injects the ConfigService.
             */
            inject: [ConfigService],
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
