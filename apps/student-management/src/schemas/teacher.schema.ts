// Import necessary modules and classes
import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

// Define the Teacher schema using @Schema decorator
@Schema()
export class Teacher extends AbstractDocument {
  // Define the name property with the required validation
  @Prop({ required: true })
  name: string;
}

// Create the Mongoose schema for the Teacher class using SchemaFactory
export const TeacherSchema = SchemaFactory.createForClass(Teacher);
