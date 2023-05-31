import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreatePotentialStudentCommand } from "./create-potentialStudent.command";
import { PotentialStudent } from "../../schemas/potentialStudent.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { PotentialStudentRegisteredEvent } from "../../events/potentialStudent-registered.event";
import { StudentManagementRepository } from "../../student-management.repository";

@CommandHandler(CreatePotentialStudentCommand)
export class CreatePotentialStudentCommandHandler implements ICommandHandler<CreatePotentialStudentCommand> {

    constructor(
        @InjectModel(PotentialStudent.name) private readonly potentialStudentModel: Model<PotentialStudent>,
        private readonly publisher: EventPublisher, private studentManagementRepository: StudentManagementRepository) {}

    async execute(command: CreatePotentialStudentCommand): Promise<any> {
        const { name, study, phoneNumber, email } = command;

        // Saving student into database
        const potentialStudent = await this.studentManagementRepository.create(new this.potentialStudentModel({ name, study, phoneNumber, email }));
        const student = new PotentialStudentRegisteredEvent(potentialStudent._id.toString(), potentialStudent.name, potentialStudent.study, potentialStudent.phoneNumber, potentialStudent.email);

        const event = this.publisher.mergeObjectContext(student);
        event.commit();
    }
    
}