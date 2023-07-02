// Import necessary modules and classes
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialStudent } from './schemas/potentialStudent.schema';
import { StudentManagementRepository } from './student-management.repository';

/**
 * @class StudentManagementService
 * @description Service class for managing student applications.
 * It interacts with the StudentManagementRepository to perform application-related operations.
 */
@Injectable()
export class StudentManagementService {
  /**
   * @constructor
   * @param {StudentManagementRepository} studentManagementRepository - The repository for student management.
   * @description Constructs an instance of the StudentManagementService.
   * It injects the StudentManagementRepository using the @InjectModel decorator.
   */
  constructor(
    @InjectModel(PotentialStudent.name)
    private readonly studentManagementRepository: StudentManagementRepository,
  ) {}

  /**
   * @method getApplications
   * @returns {Promise<any[]>} - A promise that resolves to an array of application documents.
   * @description Retrieves all applications.
   * It calls the find method of the StudentManagementRepository to get all application documents.
   */
  async getApplications(): Promise<any[]> {
    return this.studentManagementRepository.find({});
  }
}
