import { Injectable } from '@nestjs/common';

@Injectable()
export class GuidanceProgramService {
  getHello(): string {
    return 'Hello World!';
  }
}
