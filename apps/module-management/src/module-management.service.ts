import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialModule } from './schemas/potentialModule.schema';
import { ModuleManagementRepository } from './module-management.repository';

/**
 * Service class for handling business logic related to the module management feature.
 */
@Injectable()
export class ModuleManagementService {
  constructor(
    /**
     * Injects the module management repository.
     * @param moduleManagementRepository The injected module management repository.
     */
    @InjectModel(PotentialModule.name)
    private readonly moduleManagementRepository: ModuleManagementRepository,
  ) {}

  /**
   * Retrieves all applications.
   * @returns A promise that resolves to an array of applications.
   */
  async getApplications() {
    return this.moduleManagementRepository.find({});
  }

  /**
   * Deletes an application by ID.
   * @param id The ID of the application to delete.
   * @returns A promise that resolves when the application is successfully deleted.
   */
  async deleteApplicationById(id: string) {
    return this.moduleManagementRepository.delete(id);
  }
}
