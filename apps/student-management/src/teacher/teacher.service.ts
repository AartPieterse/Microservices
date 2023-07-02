// Import necessary modules and classes
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from '../schemas/teacher.schema';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { AbstractRepository } from '@app/common';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

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

  /**
   * @method create
   * @param {CreateTeacherDto} createTeacherDto - The DTO object containing teacher data.
   * @returns {Promise<void>} - A promise that resolves when the teacher is created.
   * @description Creates a new teacher.
   * It calls the create method of the TeacherRepository and passes the createTeacherDto.
   */
  async create(createTeacherDto: CreateTeacherDto){
    return await this.teacherRepository.create(createTeacherDto);
  }

  /**
   * @method findAll
   * @returns {Promise<any[]>} - A promise that resolves to an array of teacher documents.
   * @description Retrieves all teachers.
   * It calls the find method of the TeacherRepository to get all teacher documents.
   */
  async findAll(){
    return await this.teacherRepository.find({});
  }

  async findById(id: string){
    return await this.teacherRepository.findOne({_id: id});
  }

  async delete(id: string){
    return await this.teacherRepository.delete(id);
  }

  async update(id: string, updateTeacherDto: UpdateTeacherDto){
    return await this.teacherRepository.update(id, updateTeacherDto);
  }

  async findByStudy(study: string){
    return await this.teacherRepository.findOne({study: study});
  }
}
