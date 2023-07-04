import { ObjectId } from 'mongoose';

export class ModuleDto {
  readonly _id: ObjectId;
  readonly name: string;
  readonly teacher: string;
  readonly classes: string[];
}