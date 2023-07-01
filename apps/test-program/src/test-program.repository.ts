// Import necessary modules and classes from external packages
import { AbstractRepository } from "@app/common";
import { Injectable } from "@nestjs/common";
import { PotentialTest } from "./schemas/potentialTest.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

/**
 * Injectable TestProgramRepository class.
 * This class extends the AbstractRepository class from the "@app/common" package.
 * It provides data access methods for the "PotentialTest" entity.
 */
@Injectable()
export class TestProgramRepository extends AbstractRepository<PotentialTest> {
    /**
     * Constructor for the TestProgramRepository class.
     * @param applicationModel The Mongoose Model for the "PotentialTest" entity, injected using @InjectModel decorator.
     *                         This model is used for executing database operations related to the "PotentialTest" entity.
     */
    constructor(@InjectModel(PotentialTest.name) applicationModel: Model<PotentialTest>) {
        // Call the constructor of the parent AbstractRepository class passing the injected "applicationModel".
        // The parent class takes care of creating basic CRUD operations for the "PotentialTest" entity.
        super(applicationModel);
    }
}
