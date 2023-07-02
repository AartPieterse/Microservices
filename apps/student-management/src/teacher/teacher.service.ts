import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from '../schemas/teacher.schema';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { AbstractRepository } from '@app/common';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher.name)
    private readonly teacherRepository: AbstractRepository<Teacher>,
  ) {
  }

  async create(createTeacherDto: CreateTeacherDto){
    return await this.teacherRepository.create(createTeacherDto);
  }

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
