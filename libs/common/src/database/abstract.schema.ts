import { AggregateRoot } from "@nestjs/cqrs";
import { Prop, Schema } from "@nestjs/mongoose";
import mongoose, { SchemaTypes, Types } from "mongoose";

@Schema()
export class AbstractDocument extends AggregateRoot {
    @Prop({ type: SchemaTypes.ObjectId, default: () => new mongoose.Types.ObjectId()})
    _id: Types.ObjectId
}