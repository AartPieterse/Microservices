export class UpdateClassesCommand {
    constructor(
      public readonly studyId: string,
      public readonly classes: string[],
    ) {}
  }