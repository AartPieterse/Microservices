import { AbstractDocument } from "@app/common";
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';


@Schema({versionKey: false})
export class Study extends AbstractDocument {
    @Prop()
    name: string;

    @Prop()
    student: string;

    @Prop()
    class: string;

    @Prop()
    teacher: string;
}

export const StudySchema = SchemaFactory.createForClass(Study)