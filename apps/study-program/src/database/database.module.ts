import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
          uri: configService.get<string>('MONGOURL')
      }),
      inject: [ConfigService]
    })
  ],
})
export class DatabaseModule {}
