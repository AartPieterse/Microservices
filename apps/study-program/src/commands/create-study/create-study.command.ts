import { CreateStudyRequest } from '../../dto/request/create-study-request.dto';

export class CreateStudyCommand {
  constructor(public readonly createStudyRequest: CreateStudyRequest) {}
}
