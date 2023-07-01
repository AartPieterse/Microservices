// Import necessary modules and classes from external packages
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialTest } from './schemas/potentialTest.schema';
import { TestProgramRepository } from './test-program.repository';

/**
 * Injectable TestProgramService class.
 * This class provides methods to interact with the test program data.
 */
@Injectable()
export class TestProgramService {
  /**
   * Constructor for the TestProgramService class.
   * @param testProgramRepository The TestProgramRepository instance injected using @InjectModel decorator.
   *                             This repository is used to execute database operations related to the test program.
   */
  constructor(
    @InjectModel(PotentialTest.name)
    private readonly testProgramRepository: TestProgramRepository,
  ) {}

  /**
   * Retrieves all applications from the test program.
   * @returns A Promise that resolves to an array of potential tests (applications).
   */
  async getApplications() {
    return this.testProgramRepository.find({});
  }

  /**
   * Deletes an application from the test program by its ID.
   * @param id The ID of the application to be deleted.
   * @returns A Promise that resolves to the result of the delete operation.
   */
  async deleteApplicationById(id: string) {
    return this.testProgramRepository.delete(id);
  }
}
