// Import necessary modules and classes
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

// Define the PotentialStudent schema using @Schema decorator
@Schema()
export class PotentialStudent extends AbstractDocument {
  // Define the name property with the required validation
  @Prop({ required: true })
  name: string;

  // Define the study property with the required validation
  @Prop({ required: true })
  study: string;

  // Define the phoneNumber property with the required validation
  @Prop({ required: true })
  phoneNumber: string;

  // Define the email property with the required validation
  @Prop({ required: true })
  email: string;
}

// Create the Mongoose schema for the PotentialStudent class using SchemaFactory
export const PotentialStudentSchema = SchemaFactory.createForClass(PotentialStudent);
