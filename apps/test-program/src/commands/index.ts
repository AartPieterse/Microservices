import { CreateTestHandler } from './create-test/create-test.handler';
import { UpdateAnswersHandler } from './update-answers/update-answers.handler';

export const TestCommandHandlers = [
  CreateTestHandler,
  UpdateAnswersHandler,
];