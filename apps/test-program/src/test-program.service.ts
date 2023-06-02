import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialTest } from './schemas/potentialTest.schema';
import { TestProgramRepository } from './test-program.repository';

@Injectable()
export class TestProgramService {
  constructor(
    @InjectModel(PotentialTest.name)
    private readonly testProgramRepository: TestProgramRepository,
  ) {}

  async getApplications(){
    return this.testProgramRepository.find({});
  }
}
