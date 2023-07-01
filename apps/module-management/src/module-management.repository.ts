import { AbstractRepository } from "@app/common";
import { Injectable } from "@nestjs/common";
import { PotentialModule } from "./schemas/potentialModule.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ModuleManagementRepository extends AbstractRepository<PotentialModule> {
    constructor(@InjectModel(PotentialModule.name) applicationModel: Model<PotentialModule>) {
        super(applicationModel);
    }
}