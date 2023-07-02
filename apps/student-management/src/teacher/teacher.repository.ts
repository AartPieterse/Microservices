// Import necessary modules and classes
import { AbstractRepository } from "@app/common";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Teacher } from "../schemas/teacher.schema";

/**
 * @class TeacherRepository
 * @description Repository class for managing teacher data.
 * It extends the AbstractRepository class and provides CRUD operations for teachers.
 */
@Injectable()
export class TeacherRepository extends AbstractRepository<Teacher> {
    /**
     * @constructor
     * @param {Model<Teacher>} applicationModel - The Mongoose model for the Teacher schema.
     * @description Constructs an instance of the TeacherRepository.
     * It injects the Mongoose model for the Teacher schema using the @InjectModel decorator.
     * The injected model is then passed to the constructor of the AbstractRepository class.
     */
    constructor(@InjectModel(Teacher.name) applicationModel: Model<Teacher>) {
        super(applicationModel);
    }
}
