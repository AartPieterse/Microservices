import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meeting } from './schemas/meeting.schema';
import { AbstractRepository } from './database/abstract.repository';

@Injectable()
export class GuidanceRepository extends AbstractRepository<Meeting> {
  constructor(
    @InjectModel(Meeting.name)
    applicationModel: Model<Meeting>,
  ) {
    super(applicationModel);
  }
}
