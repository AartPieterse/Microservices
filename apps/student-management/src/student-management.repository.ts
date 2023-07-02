// Import necessary modules and classes
import { AbstractRepository } from "@app/common";
import { Injectable } from "@nestjs/common";
import { PotentialStudent } from "./schemas/potentialStudent.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

// Define the StudentManagementRepository class
@Injectable()
export class StudentManagementRepository extends AbstractRepository<PotentialStudent> {
  constructor(@InjectModel(PotentialStudent.name) applicationModel: Model<PotentialStudent>) {
    // Call the constructor of the AbstractRepository class and pass the applicationModel
    super(applicationModel);
  }
}
