import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialModule } from './schemas/potentialModule.schema';
import { AbstractRepository } from '@app/common';
import { ModuleManagementRepository } from './module-management.repository';
import { CreatePotentialModuleDto } from './dto/CreatePotentialModuleDto';
import { UpdatePotentialModuleDto } from './dto/UpdatePotentialModuleDto';

@Injectable()
export class ModuleManagementService {
  constructor(
    @InjectModel(PotentialModule.name)
    private readonly ModuleManagementRepository: AbstractRepository<PotentialModule>,
  ) {}

  async create(createPotentialModuleDto: CreatePotentialModuleDto) {
    return await this.ModuleManagementRepository.create(
      createPotentialModuleDto,
    );
  }

  async findAll() {
    return await this.ModuleManagementRepository.find({});
  }

  async findById(id: string) {
    return await this.ModuleManagementRepository.findOne({ _id: id });
  }

  async update(id: string, updatePotentialModuleDto: UpdatePotentialModuleDto) {
    return await this.ModuleManagementRepository.update(
      id,
      updatePotentialModuleDto,
    );
  }

  async delete(id: string) {
    return await this.ModuleManagementRepository.delete(id);
  }
}
