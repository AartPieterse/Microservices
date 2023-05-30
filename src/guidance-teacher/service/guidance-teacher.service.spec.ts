import { Test, TestingModule } from '@nestjs/testing';
import { GuidanceTeacherService } from './guidance-teacher.service';

describe('GuidanceTeacherService', () => {
  let service: GuidanceTeacherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuidanceTeacherService],
    }).compile();

    service = module.get<GuidanceTeacherService>(GuidanceTeacherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
