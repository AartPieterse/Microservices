import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialStudent } from '../schemas/PotentialStudent.schema';
import { AbstractRepository } from '@app/common';
import { CreatePotentialStudentDto } from './dto/create-potentialStudent.dto';
import { UpdatePotentialStudentDto } from './dto/update-potentialStudent.dto';

/**
 * Service class for potential students.
 */
@Injectable()
export class PotentialStudentService {
  constructor(
    @InjectModel(PotentialStudent.name)
    private readonly potentialStudentRepository: AbstractRepository<PotentialStudent>,
  ) {}

  /**
   * Creates a new potential student.
   * @param createPotentialStudentDto The DTO containing the potential student data.
   * @returns The created potential student.
   */
  async create(createPotentialStudentDto: CreatePotentialStudentDto) {
    return await this.potentialStudentRepository.create(createPotentialStudentDto);
  }

  /**
   * Retrieves all potential students.
   * @returns A list of potential students.
   */
  async findAll() {
    return await this.potentialStudentRepository.find({});
  }

  /**
   * Retrieves a potential student by ID.
   * @param id The ID of the potential student.
   * @returns The potential student with the specified ID.
   */
  async findById(id: string) {
    return await this.potentialStudentRepository.findOne({ _id: id });
  }

  /**
   * Updates a potential student.
   * @param id The ID of the potential student to update.
   * @param updatePotentialStudentDto The DTO containing the updated potential student data.
   * @returns The updated potential student.
   */
  async update(id: string, updatePotentialStudentDto: UpdatePotentialStudentDto) {
    return await this.potentialStudentRepository.update(id, updatePotentialStudentDto);
  }

  /**
   * Deletes a potential student.
   * @param id The ID of the potential student to delete.
   * @returns The deleted potential student.
   */
  async delete(id: string) {
    return await this.potentialStudentRepository.delete(id);
  }
}
