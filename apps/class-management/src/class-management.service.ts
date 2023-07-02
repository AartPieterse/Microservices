import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialClass } from './schemas/potentialClass.schema';
import { AbstractRepository } from '@app/common';
import { ClassManagementRepository } from './class-management.repository';
import { CreatePotentialClassDto } from './dto/CreatePotentialClassDto';
import { UpdatePotentialClassDto } from './dto/UpdatePotentialClassDto';

@Injectable()
export class ClassManagementService {
  constructor(
    @InjectModel(PotentialClass.name)
    private readonly ClassManagementRepository: AbstractRepository<PotentialClass>,
  ) {}

  async create(createPotentialClassDto: CreatePotentialClassDto) {
    return await this.ClassManagementRepository.create(createPotentialClassDto);
  }

  async findAll() {
    return await this.ClassManagementRepository.find({});
  }

  async findById(id: string) {
    return await this.ClassManagementRepository.findOne({ _id: id });
  }

  async update(
    id: string,
    updatePotentialClassDto: UpdatePotentialClassDto,
  ) {
    return await this.ClassManagementRepository.update(
      id,
      updatePotentialClassDto,
    );
  }

  async delete(id: string) {
    return await this.ClassManagementRepository.delete(id);
  }
}
