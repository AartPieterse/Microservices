import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialStudent } from './schemas/potentialStudent.schema';
import { StudentManagementRepository } from './student-management.repository';

@Injectable()
export class StudentManagementService {
  constructor(
    @InjectModel(PotentialStudent.name)
    private readonly studentManagementRepository: StudentManagementRepository,
  ) {}

  async getApplications(){
    return this.studentManagementRepository.find({});
  }
}
