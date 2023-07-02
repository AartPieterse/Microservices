// Import necessary modules and classes
import { AbstractRepository } from "@app/common";
import { Injectable } from "@nestjs/common";
import { PotentialStudent } from "./schemas/potentialStudent.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

/**
 * @class StudentManagementRepository
 * @description Repository class for managing potential students.
 * It extends the AbstractRepository class and provides methods for interacting with the PotentialStudent model.
 */
@Injectable()
export class StudentManagementRepository extends AbstractRepository<PotentialStudent> {
  /**
   * @constructor
   * @param {Model<PotentialStudent>} applicationModel - The Mongoose model for the PotentialStudent schema.
   * @description Constructs an instance of the StudentManagementRepository.
   * It injects the PotentialStudent model using the @InjectModel decorator.
   * The injected model is passed to the constructor of the AbstractRepository class.
   */
  constructor(@InjectModel(PotentialStudent.name) applicationModel: Model<PotentialStudent>) {
    // Call the constructor of the AbstractRepository class and pass the applicationModel
    super(applicationModel);
  }
}
