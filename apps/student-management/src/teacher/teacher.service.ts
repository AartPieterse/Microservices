// Import necessary modules and classes
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from '../schemas/teacher.schema';
import { AbstractRepository } from '@app/common';

/**
 * @class TeacherService
 * @description Service class for managing teachers.
 * It interacts with the TeacherRepository to perform teacher-related operations.
 */
@Injectable()
export class TeacherService {
  /**
   * @constructor
   * @param {TeacherRepository} teacherRepository - The repository for teacher management.
   * @description Constructs an instance of the TeacherService.
   * It injects the TeacherRepository using the @InjectModel decorator.
   */
  constructor(
    @InjectModel(Teacher.name)
    private readonly teacherRepository: AbstractRepository<Teacher>,
  ) {
  }

  async findByStudy(study: string){
    return await this.teacherRepository.findOne({study: study});
  }
}
