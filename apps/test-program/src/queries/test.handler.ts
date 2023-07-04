import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TestDto } from '../test.dto';
import { TestDtoRepository } from '../db/test-dto.repository';
import { TestQuery } from './test.query';

@QueryHandler(TestQuery)
export class TestHandler implements IQueryHandler<TestQuery> {
  constructor(private readonly testDtoRepository: TestDtoRepository) {}

  async execute(): Promise<TestDto[]> {
    return this.testDtoRepository.findAll();
  }
}
