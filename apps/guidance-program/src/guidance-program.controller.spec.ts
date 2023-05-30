import { Test, TestingModule } from '@nestjs/testing';
import { GuidanceProgramController } from './guidance-program.controller';
import { GuidanceProgramService } from './guidance-program.service';

describe('GuidanceProgramController', () => {
  let guidanceProgramController: GuidanceProgramController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GuidanceProgramController],
      providers: [GuidanceProgramService],
    }).compile();

    guidanceProgramController = app.get<GuidanceProgramController>(GuidanceProgramController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(guidanceProgramController.getHello()).toBe('Hello World!');
    });
  });
});
