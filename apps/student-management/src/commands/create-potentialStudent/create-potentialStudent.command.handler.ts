// Import necessary modules and classes
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreatePotentialStudentCommand } from "./create-potentialStudent.command";
import { PotentialStudentRegisteredEvent } from "../../events/potentialStudent-registered.event";
import { PotentialStudentService } from "../../potentialStudent/potentialStudent.service";

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
        private readonly publisher: EventPublisher, private studentManagementService: PotentialStudentService) {}

    /**
     * Execute method that handles the CreatePotentialStudentCommand.
     * It saves the potential student data into the database and publishes the PotentialStudentRegisteredEvent.
     * @param command - The CreatePotentialStudentCommand to be handled.
     * @returns A Promise representing the completion of the execution.
     */
    async execute(command: CreatePotentialStudentCommand): Promise<any> {
        // Log a message to indicate that the command handler has been triggered
        console.log("Triggered Command Handler")

        // Extract the createPotentialStudentDto from the command
        const { createPotentialStudentDto } = command;

        // Saving student into database
        const potentialStudent = await this.studentManagementService.create(createPotentialStudentDto);
        const student = new PotentialStudentRegisteredEvent(potentialStudent);

        // Merge the event with the EventPublisher context to track its operations
        const event = this.publisher.mergeObjectContext(student);

        // Publish the event to trigger any registered event handlers for this event
        event.publish(event);
    }
}
