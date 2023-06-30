import { Test, TestingModule } from '@nestjs/testing';
import { StudyController } from './study.controller';
import { StudyService } from './study.service';

describe('StudyController', () => {
  let studyController: StudyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StudyController],
      providers: [StudyService],
    }).compile();

    studyController = app.get<StudyController>(StudyController);
  });
});
