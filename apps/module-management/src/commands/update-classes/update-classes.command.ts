export class UpdateClassesCommand {
    constructor(
      public readonly moduleId: string,
      public readonly classes: string[],
    ) {}
  }