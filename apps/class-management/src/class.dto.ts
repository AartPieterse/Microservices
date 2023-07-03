import { ObjectId } from 'mongoose';

export class ClassDto {
  readonly _id: ObjectId;
  readonly name: string;
  readonly students: string[];
  readonly modules: string[];
}