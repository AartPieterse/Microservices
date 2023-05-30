import { Controller, Post } from '@nestjs/common';

@Controller('controller')
export class ControllerController {

  @Post()
  create(): string {
    return 'action';
  }
}
