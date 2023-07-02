// Import necessary modules and classes
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialStudent } from './schemas/potentialStudent.schema';
import { StudentManagementRepository } from './student-management.repository';

// Define the StudentManagementService class
@Injectable()
export class StudentManagementService {
  constructor(
    @InjectModel(PotentialStudent.name)
    private readonly studentManagementRepository: StudentManagementRepository,
  ) {}

  // Method to get all applications
  async getApplications() {
    return this.studentManagementRepository.find({});
  }
}
