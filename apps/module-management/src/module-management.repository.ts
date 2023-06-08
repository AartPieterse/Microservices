import { AbstractRepository } from "@app/common";
import { Injectable } from "@nestjs/common";
import { PotentialTest } from "./schemas/potentialTest.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ModuleManagementRepository extends AbstractRepository<PotentialTest> {
    constructor(@InjectModel(PotentialTest.name) applicationModel: Model<PotentialTest>) {
        super(applicationModel);
    }
}