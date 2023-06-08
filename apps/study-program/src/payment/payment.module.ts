import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RmqModule } from 'src/rabbitmq/rabbitmq.module';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { PaymentRepository } from './payment.repository';

@Module({
  imports: [RmqModule.register({name: APPLICATION_SERVICE}), MongooseModule.forFeature([{ name: .name, schema: PaymentSchema }])],
  controllers: [PaymentController],
  providers: [PaymentService, PaymentRepository]
})
export class PaymentModule {}
