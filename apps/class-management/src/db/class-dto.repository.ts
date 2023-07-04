import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClassDto } from '../class.dto';
import { ClassSchema } from './class.schema';

@Injectable()
export class ClassDtoRepository {
  constructor(
    @InjectModel(ClassSchema.name)
    private readonly classModel: Model<ClassSchema>,
  ) {}

  async findAll(): Promise<ClassDto[]> {
    return this.classModel.find();
  }
}
