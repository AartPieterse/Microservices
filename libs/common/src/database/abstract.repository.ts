import { Injectable, NotFoundException } from '@nestjs/common';
import { AbstractDocument } from './abstract.schema';
import { FilterQuery, Model, Types } from 'mongoose';

@Injectable()
export class AbstractRepository<TDocument extends AbstractDocument> {
    constructor(protected readonly model: Model<TDocument>) {}

    async create(document: TDocument) : Promise<TDocument> {
        const createdDocument = new this.model(document);

        return createdDocument.save();
    }

    async findOne(filterQuery: FilterQuery<TDocument>) : Promise<TDocument> {
        const document = await this.model.findOne(filterQuery).exec();

        if(!document){
            throw new NotFoundException('Document not found')
        }

        return document;
    }

    async find(filterQuery: FilterQuery<TDocument>) {
        return this.model.find(filterQuery);
    }

    async update(id: string, document: Partial<TDocument>) : Promise<TDocument> {
        return this.model.findByIdAndUpdate(id, document).exec();
    }

    async delete(id: string) : Promise<TDocument> {
        return this.model.findByIdAndDelete(id).exec();
    }
}
