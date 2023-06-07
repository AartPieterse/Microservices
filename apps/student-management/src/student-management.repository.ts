import { AbstractRepository } from "@app/common";
import { Injectable } from "@nestjs/common";
import { PotentialStudent } from "./schemas/potentialStudent.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class StudentManagementRepository extends AbstractRepository<PotentialStudent> {
    constructor(@InjectModel(PotentialStudent.name) applicationModel: Model<PotentialStudent>) {
        super(applicationModel);
    }
}