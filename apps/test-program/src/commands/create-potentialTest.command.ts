
export class CreatePotentialTestCommand {
    constructor(
      public readonly name: string,
      public readonly duration: number,
      public readonly ec: number,
      public readonly questions: string[],
      public readonly answers: string[],

    ) {}
  }
  