/**
 * Service for managing class operations.
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialClass } from './schemas/potentialClass.schema';
import { ClassManagementRepository } from './class-management.repository';

@Injectable()
export class ClassManagementService {
    /**
     * Constructs an instance of ClassManagementService.
     * @param classManagementRepository The repository for class management related data.
     */
    constructor(
        @InjectModel(PotentialClass.name)
        private readonly classManagementRepository: ClassManagementRepository,
    ) {}

    /**
     * Retrieves all applications.
     * @returns A promise that resolves to the list of applications.
     */
    async getApplications() {
        return this.classManagementRepository.find({});
    }

    /**
     * Deletes an application by ID.
     * @param id The ID of the application to delete.
     * @returns A promise that resolves to the deleted application.
     */
    async deleteApplicationById(id: string) {
        return this.classManagementRepository.delete(id);
    }
}
