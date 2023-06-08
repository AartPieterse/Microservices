import { Test, TestingModule } from '@nestjs/testing';
import { ModuleManagementController } from './module-management.controller';
import { ModuleManagementService } from './module-management.service';

describe('ModuleManagementController', () => {
  let moduleManagementController: ModuleManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ModuleManagementController],
      providers: [ModuleManagementService],
    }).compile();

    moduleManagementController = app.get<ModuleManagementController>(ModuleManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(moduleManagementController.getHello()).toBe('Hello World!');
    });
  });
});
