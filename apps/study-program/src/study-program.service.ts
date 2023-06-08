import { Injectable } from '@nestjs/common';

@Injectable()
export class StudyProgramService {
  getHello(): string {
    return 'Hello World!';
  }

  getGoodbye(): string {
    return 'Goodbye!';
  }
}
