import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TestDto } from '../test.dto';
import { TestSchema } from './test.schema';

@Injectable()
export class TestDtoRepository {
  constructor(
    @InjectModel(TestSchema.name)
    private readonly testModel: Model<TestSchema>,
  ) {}

  async findAll(): Promise<TestDto[]> {
    return this.testModel.find();
  }
}
