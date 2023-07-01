import { Test, TestingModule } from '@nestjs/testing';
import { TestProgramController } from './test-program.controller';
import { TestProgramService } from './test-program.service';

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
      // expect(testProgramController.getHello()).toBe('Hello World!');
    });
  });
});
