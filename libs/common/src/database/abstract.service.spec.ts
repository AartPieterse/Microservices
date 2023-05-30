import { Test, TestingModule } from '@nestjs/testing';
import { AbstractRepository } from './abstract.repository';

describe('AbstractService', () => {
  let service: AbstractRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbstractRepository],
    }).compile();

    service = module.get<AbstractRepository>(AbstractRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
