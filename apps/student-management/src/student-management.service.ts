import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialStudent } from './schemas/potentialStudent.schema';
import { StudentManagementRepository } from './student-management.repository';
import { applyStudyDto } from './dto/applyStudy.dto';
import { RabbitmqService } from '@app/common';

@Injectable()
export class StudentManagementService {
  constructor(
    @InjectModel(PotentialStudent.name)
    private readonly studentManagementRepository: StudentManagementRepository,
    private readonly rabbitmqService: RabbitmqService
  ) {}

  async applyForStudy(data: applyStudyDto) {
    try {
        const potentialStudent = await this.studentManagementRepository.create(data);

        const teacher = 'Teacher1';
        const message = JSON.stringify({
          teacher: teacher,
          studentName: data.name,
          studentNumber: data.phoneNumber,
          studentEmail: data.email,
          studyName: data.study,
        });

        this.rabbitmqService.sendMessage('teacher_notifications', message);

        return potentialStudent;
    } catch (err) {
        throw err;
    }
  }

  async getApplications(){
    return this.studentManagementRepository.find({});
  }
}
