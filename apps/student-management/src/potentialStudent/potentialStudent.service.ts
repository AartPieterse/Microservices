import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialStudent } from '../schemas/PotentialStudent.schema';
import { AbstractRepository, RabbitmqService } from '@app/common';
import { CreatePotentialStudentDto } from './dto/create-potentialStudent.dto';
import { UpdatePotentialStudentDto } from './dto/update-potentialStudent.dto';

@Injectable()
export class PotentialStudentService {
  constructor(
    @InjectModel(PotentialStudent.name)
    private readonly PotentialStudentRepository: AbstractRepository<PotentialStudent>,
    private readonly rabbitmqService: RabbitmqService
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

  async approve(id: string) {
    const student = await this.PotentialStudentRepository.delete(id);
    const message = `Your last meeting resolved into a positive match!`;
    
    await this.rabbitmqService.sendMessage('student_notifications', message);
  }
}
