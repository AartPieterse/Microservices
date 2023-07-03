import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ModuleDto } from '../module.dto';
import { ModuleDtoRepository } from '../db/module-dto.repository';
import { ModuleQuery } from './module.query';

@QueryHandler(ModuleQuery)
export class ModuleHandler implements IQueryHandler<ModuleQuery> {
  constructor(private readonly moduleDtoRepository: ModuleDtoRepository) {}

  async execute(): Promise<ModuleDto[]> {
    return this.moduleDtoRepository.findAll();
  }
}
