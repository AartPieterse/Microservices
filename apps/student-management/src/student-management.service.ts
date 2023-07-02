// Import necessary modules and classes
import { AbstractRepository, RabbitmqService } from '@app/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialStudent } from './schemas/potentialStudent.schema';

/**
 * @class StudentManagementService
 * @description Service class for managing student applications.
 * It interacts with the StudentManagementRepository to perform application-related operations.
 */
@Injectable()
export class StudentManagementService {
    constructor(
        @InjectModel(PotentialStudent.name)
        private readonly PotentialStudentRepository: AbstractRepository<PotentialStudent>,
        private readonly rabbitmqService: RabbitmqService
      ) {}
    
      async approve(id: string) {
        const student = await this.PotentialStudentRepository.delete(id);
        const message = `Your last meeting resolved into a positive match!`;
        
        await this.rabbitmqService.sendMessage('student_notifications', message);
      }
}
