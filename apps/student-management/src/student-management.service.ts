import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class StudentManagementService {
  private readonly logger = new Logger(StudentManagementService.name)
  
  
  getHello(): string {
    return 'Hello World!';
  }

  student(data: any){
    this.logger.log('Student...', data)
  }
}
