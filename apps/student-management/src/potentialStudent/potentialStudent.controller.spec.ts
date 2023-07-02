import { Test, TestingModule } from '@nestjs/testing';
import { PotentialStudentController } from './potentialStudent.controller';
import { PotentialStudentService } from './potentialStudent.service';

describe('PotentialStudentController', () => {
  let controller: PotentialStudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PotentialStudentController],
      providers: [PotentialStudentService],
    }).compile();

    controller = module.get<PotentialStudentController>(PotentialStudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
