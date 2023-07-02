// Import necessary modules and classes
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from '../schemas/teacher.schema';
import { TeacherRepository } from './teacher.repository';
import { CreateTeacherDto } from './dto/create-teacher.dto';

// Define the TeacherService class
@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher.name)
    private readonly teacherRepository: TeacherRepository,
  ) {}

  // Method to create a teacher
  async create(createTeacherDto: CreateTeacherDto) {
    // Call the create method of teacherRepository
    await this.teacherRepository.create(createTeacherDto);
  }

  // Method to find all teachers
  async findAll() {
    // Call the find method of teacherRepository
    return this.teacherRepository.find({});
  }
}
