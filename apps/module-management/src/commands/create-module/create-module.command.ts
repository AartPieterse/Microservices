import { CreateModuleRequest } from '../../dto/request/create-module-request.dto';

export class CreateModuleCommand {
  constructor(public readonly createModuleRequest: CreateModuleRequest) {}
}
