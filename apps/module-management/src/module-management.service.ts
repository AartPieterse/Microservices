import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialModule } from './schemas/potentialModule.schema';
import { ModuleManagementRepository } from './module-management.repository';

@Injectable()
export class ModuleManagementService {
  constructor(
    @InjectModel(PotentialModule.name)
    private readonly moduleManagementRepository: ModuleManagementRepository,
  ) {}

  async getApplications(){
    return this.moduleManagementRepository.find({});
  }

  async deleteApplicationById(id: string) {
    return this.moduleManagementRepository.delete(id);
  }
}
