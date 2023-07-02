import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialModule } from './schemas/potentialModule.schema';
import { AbstractRepository } from '@app/common';
import { CreatePotentialModuleDto } from './dto/CreatePotentialModuleDto';
import { UpdatePotentialModuleDto } from './dto/UpdatePotentialModuleDto';

/**
 * Service for managing potential modules.
 */
@Injectable()
export class ModuleManagementService {
  constructor(
    @InjectModel(PotentialModule.name)
    private readonly ModuleManagementRepository: AbstractRepository<PotentialModule>,
  ) {}

  /**
   * Create a new potential module.
   *
   * @param createPotentialModuleDto - The data for creating a potential module.
   * @returns The created potential module.
   */
  async create(createPotentialModuleDto: CreatePotentialModuleDto) {
    return await this.ModuleManagementRepository.create(
      createPotentialModuleDto,
    );
  }

  /**
   * Get all potential modules.
   *
   * @returns All potential modules.
   */
  async findAll() {
    return await this.ModuleManagementRepository.find({});
  }

  /**
   * Get a potential module by its ID.
   *
   * @param id - The ID of the potential module.
   * @returns The potential module with the specified ID.
   */
  async findById(id: string) {
    return await this.ModuleManagementRepository.findOne({ _id: id });
  }

  /**
   * Update a potential module.
   *
   * @param id - The ID of the potential module.
   * @param updatePotentialModuleDto - The updated data for the potential module.
   * @returns The updated potential module.
   */
  async update(id: string, updatePotentialModuleDto: UpdatePotentialModuleDto) {
    return await this.ModuleManagementRepository.update(
      id,
      updatePotentialModuleDto,
    );
  }

  /**
   * Delete a potential module.
   *
   * @param id - The ID of the potential module to delete.
   * @returns The deleted potential module.
   */
  async delete(id: string) {
    return await this.ModuleManagementRepository.delete(id);
  }
}
