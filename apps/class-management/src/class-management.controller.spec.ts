import { Test, TestingModule } from '@nestjs/testing';
import { TestProgramController } from './class-management.controller';
import { TestProgramService } from './class-management.service';

describe('TestProgramController', () => {
  let testProgramController: TestProgramController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TestProgramController],
      providers: [TestProgramService],
    }).compile();

    testProgramController = app.get<TestProgramController>(TestProgramController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(testProgramController.getHello()).toBe('Hello World!');
    });
  });
});
