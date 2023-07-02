import { Injectable, NotFoundException } from '@nestjs/common';
import { AbstractDocument } from './abstract.schema';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class AbstractRepository<TDocument extends AbstractDocument> {
  constructor(protected readonly model: Model<TDocument>) {}

  /**
   * Create a new document.
   * @param document The document to create.
   * @returns The created document.
   */
  async create(document: TDocument): Promise<TDocument> {
    const createdDocument = new this.model(document);
    return createdDocument.save();
  }

  /**
   * Find a single document matching the filter query.
   * @param filterQuery The filter query to find the document.
   * @returns The found document.
   * @throws NotFoundException if the document is not found.
   */
  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    const document = await this.model.findOne(filterQuery).exec();

    if (!document) {
      throw new NotFoundException('Document not found');
    }

    return document;
  }

  /**
   * Find multiple documents matching the filter query.
   * @param filterQuery The filter query to find the documents.
   * @returns An array of found documents.
   */
  async find(filterQuery: FilterQuery<TDocument>): Promise<TDocument[]> {
    return this.model.find(filterQuery).exec();
  }

  /**
   * Update a document by its ID.
   * @param id The ID of the document to update.
   * @param document The partial document containing the fields to update.
   * @returns The updated document.
   */
  async update(id: string, document: Partial<TDocument>): Promise<TDocument> {
    return this.model.findByIdAndUpdate(id, document).exec();
  }

  /**
   * Delete a document by its ID.
   * @param id The ID of the document to delete.
   * @returns The deleted document.
   */
  async delete(id: string): Promise<TDocument> {
    return this.model.findByIdAndDelete(id).exec();
  }
}
