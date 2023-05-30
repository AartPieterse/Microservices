import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @MessagePattern('notifications')
  getHello(@Ctx() context : RmqContext): string {
    console.log(`Pattern: ${context.getPattern()}`);
    return this.appService.getHello();
  }
}
