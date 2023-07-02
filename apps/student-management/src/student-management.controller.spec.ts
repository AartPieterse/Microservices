import { Test, TestingModule } from '@nestjs/testing';
import { StudentManagementController } from './student-management.controller';
import { StudentManagementService } from './student-management.service';

describe('StudentManagementController', () => {
  let studentManagementController: StudentManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StudentManagementController],
      providers: [StudentManagementService],
    }).compile();

    studentManagementController = app.get<StudentManagementController>(StudentManagementController);
  });
});
