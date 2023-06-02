import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RabbitmqService {

  constructor(
    @Inject('RABBITMQ_CLIENT') private readonly clientProxy: ClientProxy,
  ) {}

  sendMessage(queue: string, message: string): Promise<void> {
    return lastValueFrom(this.clientProxy.emit(queue, message));
  }
}
