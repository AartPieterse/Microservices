import { Injectable } from '@nestjs/common';

@Injectable()
export class TestProgramService {
  getHello(): string {
    return 'Hello World!';
  }
}
