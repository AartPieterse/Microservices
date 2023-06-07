import { AbstractRepository } from "@app/common";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Teacher } from "../schemas/teacher.schema";

@Injectable()
export class TeacherRepository extends AbstractRepository<Teacher> {
    constructor(@InjectModel(Teacher.name) applicationModel: Model<Teacher>) {
        super(applicationModel);
    }
}