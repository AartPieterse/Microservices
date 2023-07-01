import { AbstractRepository } from "@app/common";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Meeting } from "../schemas/meeting.schema";

@Injectable()
export class MeetingRepository extends AbstractRepository<Meeting> {
    constructor(@InjectModel(Meeting.name) applicationModel: Model<Meeting>) {
        super(applicationModel);
    }
}