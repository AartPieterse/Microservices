// Import necessary modules and classes
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from '../schemas/teacher.schema';
import { TeacherRepository } from './teacher.repository';
import { CreateTeacherDto } from './dto/create-teacher.dto';

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
    private readonly teacherRepository: TeacherRepository,
  ) {}

  /**
   * @method create
   * @param {CreateTeacherDto} createTeacherDto - The DTO object containing teacher data.
   * @returns {Promise<void>} - A promise that resolves when the teacher is created.
   * @description Creates a new teacher.
   * It calls the create method of the TeacherRepository and passes the createTeacherDto.
   */
  async create(createTeacherDto: CreateTeacherDto): Promise<void> {
    await this.teacherRepository.create(createTeacherDto);
  }

  /**
   * @method findAll
   * @returns {Promise<any[]>} - A promise that resolves to an array of teacher documents.
   * @description Retrieves all teachers.
   * It calls the find method of the TeacherRepository to get all teacher documents.
   */
  async findAll(): Promise<any[]> {
    return this.teacherRepository.find({});
  }
}
