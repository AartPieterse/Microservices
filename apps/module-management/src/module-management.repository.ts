import { AbstractRepository } from "@app/common";
import { Injectable } from "@nestjs/common";
import { PotentialModule } from "./schemas/potentialModule.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

/**
 * Repository class for handling database operations related to the `PotentialModule` entity.
 * Extends the abstract repository class provided by the common module.
 */
@Injectable()
export class ModuleManagementRepository extends AbstractRepository<PotentialModule> {
    /**
     * Constructs the `ModuleManagementRepository` instance.
     * @param applicationModel The injected Mongoose model for the `PotentialModule` schema.
     */
    constructor(@InjectModel(PotentialModule.name) applicationModel: Model<PotentialModule>) {
        super(applicationModel);
    }
}
