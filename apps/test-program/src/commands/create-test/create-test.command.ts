import { CreateTestRequest } from '../../../src/dto/request/create-test-request.dto';

export class CreateTestCommand {
  constructor(public readonly createTestRequest: CreateTestRequest) {}
}
