import { Test, TestingModule } from '@nestjs/testing';
import { StudyProgramController } from './study-program.controller';
import { StudyProgramService } from './study-program.service';

describe('StudyProgramController', () => {
  let studyProgramController: StudyProgramController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StudyProgramController],
      providers: [StudyProgramService],
    }).compile();

    studyProgramController = app.get<StudyProgramController>(StudyProgramController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(studyProgramController.getHello()).toBe('Hello World!');
    });
  });
});
