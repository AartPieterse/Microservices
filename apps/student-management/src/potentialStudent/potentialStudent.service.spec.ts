import { Test, TestingModule } from '@nestjs/testing';
import { PotentialStudentService } from './potentialStudent.service';

describe('PotentialStudentService', () => {
  let service: PotentialStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PotentialStudentService],
    }).compile();

    service = module.get<PotentialStudentService>(PotentialStudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
