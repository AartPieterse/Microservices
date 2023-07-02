// Import necessary modules and classes
import { AbstractRepository } from "@app/common";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Teacher } from "../schemas/teacher.schema";

// Define the TeacherRepository class
@Injectable()
export class TeacherRepository extends AbstractRepository<Teacher> {
    // Constructor for the TeacherRepository class
    constructor(@InjectModel(Teacher.name) applicationModel: Model<Teacher>) {
        // Call the constructor of the AbstractRepository class with the applicationModel
        super(applicationModel);
    }
}
