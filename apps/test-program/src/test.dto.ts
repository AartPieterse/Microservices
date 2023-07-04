import { ObjectId } from 'mongoose';

export class TestDto {
  readonly _id: ObjectId;
  readonly name: string;
  readonly module: string;
  readonly duration: number;
  readonly ec: number;
  readonly questions: string[];
  readonly answers: string[];
  readonly isAnswerFive: boolean;
}