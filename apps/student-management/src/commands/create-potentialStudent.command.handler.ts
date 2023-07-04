import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreatePotentialStudentCommand } from "./create-potentialStudent.command";
import { AbstractService } from "@app/common";
import { PotentialStudent } from "../schemas/potentialStudent.schema";
import { ApplicationSubmittedEvent } from "../events/application-submitted.event";
import { InjectModel } from "@nestjs/mongoose";
/**
 * Command handler for CreatePotentialStudentCommand.
 * This class handles the command to create a potential student and publishes the corresponding event.
 */

@CommandHandler(CreatePotentialStudentCommand)
export class CreatePotentialStudentCommandHandler implements ICommandHandler<CreatePotentialStudentCommand> {

    /**
     * Constructor for the CreatePotentialStudentCommandHandler class.
     * @param publisher - The EventPublisher instance used to publish events.
     * @param studentManagementRepository - The StudentManagementRepository instance used to access the database.
     */
    constructor(
        private readonly publisher: EventPublisher, @InjectModel(PotentialStudent.name) private readonly potentialStudentService: AbstractService<PotentialStudent>) {
        }

    /**
     * Execute method that handles the CreatePotentialStudentCommand.
     * It saves the potential student data into the database and publishes the PotentialStudentRegisteredEvent.
     * @param command - The CreatePotentialStudentCommand to be handled.
     * @returns A Promise representing the completion of the execution.
     */
    async execute(command: CreatePotentialStudentCommand): Promise<any> {
        const { createPotentialStudentDto } = command;

        // Saving student into database
        const potentialStudent = await this.potentialStudentService.create(createPotentialStudentDto);
        const enrollment = new ApplicationSubmittedEvent(potentialStudent);

        // Publish event
        const event = this.publisher.mergeObjectContext(enrollment);
        event.publish(event);
    }
}