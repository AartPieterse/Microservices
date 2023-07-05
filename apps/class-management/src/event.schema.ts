import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class EventSource extends AbstractDocument {
    @Prop({ required: true })
    body: string;
}


export const EventSourceSchema = SchemaFactory.createForClass(EventSource);