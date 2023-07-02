import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreatePotentialStudentCommand } from "./create-potentialStudent.command";
import { PotentialStudentRegisteredEvent } from "../../events/potentialStudent-registered.event";
import { PotentialStudentService } from "../../potentialStudent/potentialStudent.service";

@CommandHandler(CreatePotentialStudentCommand)
export class CreatePotentialStudentCommandHandler implements ICommandHandler<CreatePotentialStudentCommand> {

    constructor(
        private readonly publisher: EventPublisher, private studentManagementService: PotentialStudentService) {}

    async execute(command: CreatePotentialStudentCommand): Promise<any> {
        console.log("Triggered Command Handler")

        const { createPotentialStudentDto } = command;

        // Saving student into database
        const potentialStudent = await this.studentManagementService.create(createPotentialStudentDto);
        const student = new PotentialStudentRegisteredEvent(potentialStudent);

        const event = this.publisher.mergeObjectContext(student);
        event.publish(event);
    }
}