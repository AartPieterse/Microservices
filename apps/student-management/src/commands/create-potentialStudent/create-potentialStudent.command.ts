
export class CreatePotentialStudentCommand {
  constructor(
    public readonly name: string,
    public readonly study: string,
    public readonly phoneNumber: string,
    public readonly email: string,
  ) {}
}
