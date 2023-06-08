import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialTest } from './schemas/potentialTest.schema';
import { ModuleManagementRepository } from './module-management.repository';
import { applyTestDto } from './dto/applyTest.dto';
import { RabbitmqService } from '@app/common';

@Injectable()
export class ModuleManagementService {
  constructor(
    @InjectModel(PotentialTest.name)
    private readonly moduleManagementRepository: ModuleManagementRepository,
    private readonly rabbitmqService: RabbitmqService
  ) {}

  async applyForTest(data: applyTestDto) {
    try {
        const potentialTest = await this.moduleManagementRepository.create(data);

        const teacher = 'Teacher1';
        const message = JSON.stringify({
          teacher: teacher,
          studentName: data.name,
          studentNumber: data.phoneNumber,
          studentEmail: data.email,
          studyName: data.study,
        });

        this.rabbitmqService.sendMessage('teacher_notifications', message);

        return potentialTest;
    } catch (err) {
        throw err;
    }
  }

  async getApplications(){
    return this.moduleManagementRepository.find({});
  }
}
