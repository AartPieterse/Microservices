import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPotentialStudentQuery } from './potentialStudent.query';
import { AbstractService } from '@app/common';
import { PotentialStudent } from '../schemas/potentialStudent.schema';
import { InjectModel } from '@nestjs/mongoose';

@QueryHandler(GetPotentialStudentQuery)
export class GetPotentialStudentQueryHandler implements IQueryHandler<GetPotentialStudentQuery> {
  constructor(@InjectModel(PotentialStudent.name) private readonly potentialStudentService: AbstractService<PotentialStudent>) {}
  execute(query: GetPotentialStudentQuery): Promise<any> {
    const { getpotentialStudent } = query;

    return this.potentialStudentService.findOne({_id: getpotentialStudent});
  }
}