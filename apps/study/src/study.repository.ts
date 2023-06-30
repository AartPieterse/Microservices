import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { Study } from "./schemas/study.schema"
import { InjectModel, InjectConnection } from "@nestjs/mongoose"
import { Connection, Model } from "mongoose"

@Injectable()
export class StudyRepository extends AbstractRepository<Study>{
    protected readonly logger = new Logger(StudyRepository.name)

    constructor(
        @InjectModel(Study.name) studyModel: Model<Study>, 
        @InjectConnection() connection: Connection,
    ) {
        super(studyModel, connection)
    }
}