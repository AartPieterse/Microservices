import { Injectable } from '@nestjs/common';
import { FilterQuery } from 'mongoose';
import { AbstractRepository } from './abstract.repository';
import { AbstractDocument } from './abstract.schema';

@Injectable()
export class AbstractService<TDocument extends AbstractDocument> {
  constructor(protected readonly repository: AbstractRepository<TDocument>) {}

  async create(document: TDocument) : Promise<TDocument> {
    return await this.repository.create(document);
  }

  async findOne(filterQuery: FilterQuery<TDocument>) : Promise<TDocument>{
    return await this.repository.findOne(filterQuery);
  }

  async find(filterQuery: FilterQuery<TDocument>)  {
    return this.repository.find(filterQuery);
  }

  async update(id: string, document: Partial<TDocument>) : Promise<TDocument> {
    return await this.repository.update(id, document);
  }

  async delete(id: string): Promise<TDocument> {
    return await this.repository.delete(id);
  }
}
