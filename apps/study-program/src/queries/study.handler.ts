import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { StudyDto } from '../study.dto';
import { StudyDtoRepository } from '../db/study-dto.repository';
import { StudyQuery } from './study.query';

@QueryHandler(StudyQuery)
export class StudyHandler implements IQueryHandler<StudyQuery> {
  constructor(private readonly studyDtoRepository: StudyDtoRepository) {}

  async execute(): Promise<StudyDto[]> {
    return this.studyDtoRepository.findAll();
  }
}
