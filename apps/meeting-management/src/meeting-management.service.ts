import { Injectable } from '@nestjs/common';

@Injectable()
export class MeetingManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
