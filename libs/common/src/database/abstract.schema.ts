// Import necessary dependencies
import { AggregateRoot } from "@nestjs/cqrs";
import { Prop, Schema } from "@nestjs/mongoose";
import mongoose, { SchemaTypes, Types } from "mongoose";

/**
 * @class AbstractDocument
 * @extends AggregateRoot
 * @description Base class for Mongoose schema with CQRS support.
 */
@Schema()
export class AbstractDocument extends AggregateRoot {
    /**
     * @property {_id}
     * @type {Types.ObjectId}
     * @description Unique identifier for the document, represented by a Mongoose ObjectId.
     */
    @Prop({ type: SchemaTypes.ObjectId, default: () => new mongoose.Types.ObjectId()})
    _id: Types.ObjectId
}
