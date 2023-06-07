import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from '../schemas/teacher.schema';
import { TeacherRepository } from './teacher.repository';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher.name)
    private readonly teacherRepository: TeacherRepository,
  ) {
  }

  async create(createTeacherDto: CreateTeacherDto){
    this.teacherRepository.create(createTeacherDto);
  }

  async findAll(){
    this.teacherRepository.find({});
  }
}
