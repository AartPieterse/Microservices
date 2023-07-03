import { ObjectId } from 'mongoose';

export class StudyDto {
  readonly _id: ObjectId;
  readonly name: string;
  readonly classes: string[];
}