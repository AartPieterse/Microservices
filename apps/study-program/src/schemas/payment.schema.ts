import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNumber, IsString } from "class-validator";
import { AbstractDocument } from "src/database/abstract.schema";

@Schema()
export class Payment extends AbstractDocument {

  @IsString()
  studentId: string;

  @Prop({ required: true })
  paid: boolean;

  @IsNumber()
  amount: number;
}

export const TeacherSchema = SchemaFactory.createForClass(Payment);