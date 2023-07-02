import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialStudent } from '../schemas/PotentialStudent.schema';
import { AbstractRepository } from '@app/common';
import { CreatePotentialStudentDto } from './dto/create-potentialStudent.dto';
import { UpdatePotentialStudentDto } from './dto/update-potentialStudent.dto';

@Injectable()
export class PotentialStudentService {
  constructor(
    @InjectModel(PotentialStudent.name)
    private readonly PotentialStudentRepository: AbstractRepository<PotentialStudent>,
  ) {}

  async create(createPotentialStudentDto: CreatePotentialStudentDto){
    return await this.PotentialStudentRepository.create(createPotentialStudentDto);
  }

  async findAll(){
    return await this.PotentialStudentRepository.find({});
  }

  async findById(id: string){
    return await this.PotentialStudentRepository.findOne({_id: id});
  }

  async update(id: string, updatePotentialStudentDto: UpdatePotentialStudentDto){
    return await this.PotentialStudentRepository.update(id, updatePotentialStudentDto);
  }

  async delete(id: string){
    return await this.PotentialStudentRepository.delete(id);
  }
}
