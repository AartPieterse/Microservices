import { BadRequestException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';

export class Class extends AggregateRoot {
  constructor(
    private readonly _id: string,
    private readonly name: string,
    private readonly students: string[],
    private  modules: string[],
  ) {
    super();
  }

  getId(): string {
    return this._id;
  }

  getName(): string {
    return this.name;
  }

  getStudents(): string[] {
    return [...this.students];
  }

  getModules(): string[] {
    return [...this.modules];
  }

  
  updateModules(modules: string[]): void {
    const modulesLower = modules.map(modules =>
      modules.toLocaleLowerCase(),
    );
    if (modulesLower.includes('Informatica')) {
      throw new BadRequestException('De module mag niet Informatica zijn');
    }
    this.modules = modules;
  }
}