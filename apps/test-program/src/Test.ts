import { BadRequestException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';

export class Test extends AggregateRoot {
  constructor(
    private readonly _id: string,
    private readonly name: string,
    private readonly module: string,
    private readonly duration: number,
    private readonly ec: number,
    private questions: string[],
    private answers: string[]
  ) {
    super();
  }

  getId(): string {
    return this._id;
  }

  getName(): string {
    return this.name;
  }

  getModule(): string {
    return this.module;
  }
  getDuration(): number {
    return this.duration;
  }
  getEc(): number {
    return this.ec;
  }

  getQuestions(): string[] {
    return [...this.questions];
  }
  
  getAnswers(): string[] {
    return [...this.answers];
  }

  updateAnswers(answers: string[]): void {
    const answersLower = answers.map(answers =>
      answers.toLocaleLowerCase(),
    );
    if (answersLower.includes('Het antwoord is 5')) {
      throw new BadRequestException('Het antwoord mag niet 5 zijn');
    }
    this.answers = answers;
  }
}