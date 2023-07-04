import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ModuleDto } from '../module.dto';
import { ModuleSchema } from './module.schema';

@Injectable()
export class ModuleDtoRepository {
  constructor(
    @InjectModel(ModuleSchema.name)
    private readonly moduleModel: Model<ModuleSchema>,
  ) {}

  async findAll(): Promise<ModuleDto[]> {
    return this.moduleModel.find();
  }
}
