import { CreateClassRequest } from '../../dto/request/create-class-request.dto';

export class CreateClassCommand {
  constructor(public readonly createClassRequest: CreateClassRequest) {}
}
