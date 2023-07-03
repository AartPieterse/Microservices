export class UpdateModulesCommand {
    constructor(
      public readonly classId: string,
      public readonly modules: string[],
    ) {}
  }