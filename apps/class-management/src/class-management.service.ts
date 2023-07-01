import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialClass } from './schemas/potentialClass.schema';
import { ClassManagementRepository } from './class-management.repository';

@Injectable()
export class ClassManagementService {
  constructor(
    @InjectModel(PotentialClass.name)
    private readonly classManagementRepository: ClassManagementRepository,
  ) {}

  async getApplications(){
    return this.classManagementRepository.find({});
  }

  async deleteApplicationById(id: string) {
    return this.classManagementRepository.delete(id);
  }
}
