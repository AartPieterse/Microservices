export class UpdateAnswersCommand {
    constructor(
      public readonly testId: string,
      public readonly answers: string[],
    ) {}
  }