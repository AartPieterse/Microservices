import { EventsHandler, IQueryHandler } from '@nestjs/cqrs';
import { PotentialStudentService } from '../potentialStudent/potentialStudent.service';
import { GetPotentialStudentQuery } from './potentialStudent.query';

@EventsHandler(GetPotentialStudentQuery)
export class GetPotentialStudentQueryHandler implements IQueryHandler<GetPotentialStudentQuery> {
  constructor(private readonly potentialStudentService: PotentialStudentService) {}
  execute(query: GetPotentialStudentQuery): Promise<any> {
    const { potentialStudent } = query;

    return this.potentialStudentService.findById(potentialStudent._id.toString());
  }
}