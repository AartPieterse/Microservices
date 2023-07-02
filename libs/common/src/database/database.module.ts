// Import necessary dependencies
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

/**
 * @module DatabaseModule
 * @description Module for configuring the database connection using Mongoose.
 */
@Module({
  imports: [
    /**
     * @module MongooseModule
     * @description Mongoose module for connecting to the MongoDB database.
     * It uses the `forRootAsync` method to configure the connection asynchronously.
     */
    MongooseModule.forRootAsync({
      /**
       * @method useFactory
       * @param {ConfigService} configService - The ConfigService instance used for accessing configuration values.
       * @returns {Object} - The Mongoose connection configuration object.
       * @description Factory function for creating the Mongoose connection configuration object.
       * It retrieves the MongoDB URI from the `MONGODB_URI` configuration value using the ConfigService.
       */
      useFactory: (configService: ConfigService) => ({
          uri: configService.get<string>('MONGODB_URI')
      }),
      /**
       * @property {Array} inject
       * @description An array of dependencies to inject into the factory function.
       * In this case, it injects the ConfigService.
       */
      inject: [ConfigService]
    })
  ],
})
export class DatabaseModule {}
