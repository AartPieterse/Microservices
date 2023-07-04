import { BadRequestException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';

export class Study extends AggregateRoot {
  constructor(
    private readonly _id: string,
    private readonly name: string,
    private  classes: string[],
  ) {
    super();
  }

  getId(): string {
    return this._id;
  }

  getName(): string {
    return this.name;
  }

  getClasses(): string[] {
    return [...this.classes];
  }
  
  updateClasses(classes: string[]): void {
    const classesLower = classes.map(classes =>
      classes.toLocaleLowerCase(),
    );
    if (classesLower.includes('13A')) {
      throw new BadRequestException('De klas mag niet 13A zijn');
    }
    this.classes = classes;
  }
}