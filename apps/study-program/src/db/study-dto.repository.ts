import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudyDto } from '../study.dto';
import { StudySchema } from './study.schema';

@Injectable()
export class StudyDtoRepository {
  constructor(
    @InjectModel(StudySchema.name)
    private readonly studyModel: Model<StudySchema>,
  ) {}

  async findAll(): Promise<StudyDto[]> {
    return this.studyModel.find();
  }
}
