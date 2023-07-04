import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ClassDto } from '../class.dto';
import { ClassDtoRepository } from '../db/class-dto.repository';
import { ClassQuery } from './class.query';

@QueryHandler(ClassQuery)
export class ClassHandler implements IQueryHandler<ClassQuery> {
  constructor(private readonly classDtoRepository: ClassDtoRepository) {}

  async execute(): Promise<ClassDto[]> {
    return this.classDtoRepository.findAll();
  }
}
