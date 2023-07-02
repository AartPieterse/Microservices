/**
 * Repository for managing class management related data.
 */
import { AbstractRepository } from "@app/common";
import { Injectable } from "@nestjs/common";
import { PotentialClass } from "./schemas/potentialClass.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ClassManagementRepository extends AbstractRepository<PotentialClass> {
    /**
     * Constructs an instance of ClassManagementRepository.
     * @param applicationModel The Mongoose model for the PotentialClass schema.
     */
    constructor(@InjectModel(PotentialClass.name) applicationModel: Model<PotentialClass>) {
        super(applicationModel);
    }
}
