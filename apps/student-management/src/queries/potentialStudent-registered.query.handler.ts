import { EventsHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetPotentialStudentQuery } from './potentialStudent.query';
import { AbstractService } from '@app/common';
import { PotentialStudent } from '../schemas/potentialStudent.schema';

@EventsHandler(GetPotentialStudentQuery)
export class GetPotentialStudentQueryHandler implements IQueryHandler<GetPotentialStudentQuery> {
  constructor(private readonly potentialStudentService: AbstractService<PotentialStudent>) {}
  execute(query: GetPotentialStudentQuery): Promise<any> {
    const { id } = query;

    return this.potentialStudentService.findOne({_id: id});
  }
}