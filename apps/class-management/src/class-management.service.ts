import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialClass } from './schemas/potentialClass.schema';
import { AbstractRepository } from '@app/common';
import { ClassManagementRepository } from './class-management.repository';
import { CreatePotentialClassDto } from './dto/CreatePotentialClassDto';
import { UpdatePotentialClassDto } from './dto/UpdatePotentialClassDto';

/**
 * Service for managing potential classes.
 */
@Injectable()
export class ClassManagementService {
  constructor(
    @InjectModel(PotentialClass.name)
    private readonly ClassManagementRepository: AbstractRepository<PotentialClass>,
  ) {}

  /**
   * Create a new potential class.
   *
   * @param createPotentialClassDto - The data for creating a potential class.
   * @returns The created potential class.
   */
  async create(createPotentialClassDto: CreatePotentialClassDto) {
    return await this.ClassManagementRepository.create(createPotentialClassDto);
  }

  /**
   * Get all potential classes.
   *
   * @returns All potential classes.
   */
  async findAll() {
    return await this.ClassManagementRepository.find({});
  }

  /**
   * Get a potential class by its ID.
   *
   * @param id - The ID of the potential class.
   * @returns The potential class with the specified ID.
   */
  async findById(id: string) {
    return await this.ClassManagementRepository.findOne({ _id: id });
  }

  /**
   * Update a potential class.
   *
   * @param id - The ID of the potential class.
   * @param updatePotentialClassDto - The updated data for the potential class.
   * @returns The updated potential class.
   */
  async update(
    id: string,
    updatePotentialClassDto: UpdatePotentialClassDto,
  ) {
    return await this.ClassManagementRepository.update(
      id,
      updatePotentialClassDto,
    );
  }

  /**
   * Delete a potential class.
   *
   * @param id - The ID of the potential class to delete.
   * @returns The deleted potential class.
   */
  async delete(id: string) {
    return await this.ClassManagementRepository.delete(id);
  }
}
