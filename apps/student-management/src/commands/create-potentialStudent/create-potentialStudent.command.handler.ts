// Import necessary modules and classes
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreatePotentialStudentCommand } from "./create-potentialStudent.command";
import { PotentialStudentRegisteredEvent } from "../../events/potentialStudent-registered.event";
import { StudentManagementRepository } from "../../student-management.repository";

// Define the command handler for the CreatePotentialStudentCommand
@CommandHandler(CreatePotentialStudentCommand)
export class CreatePotentialStudentCommandHandler implements ICommandHandler<CreatePotentialStudentCommand> {

    // Constructor for the CreatePotentialStudentCommandHandler class
    // It injects the EventPublisher and StudentManagementRepository instances
    constructor(
        private readonly publisher: EventPublisher, private studentManagementRepository: StudentManagementRepository) {}

    // Execute method that handles the command
    async execute(command: CreatePotentialStudentCommand): Promise<any> {
        // Log a message to indicate that the command handler has been triggered
        console.log("Triggered Command Handler")

        // Extract the createPotentialStudentDto from the command
        const { createPotentialStudentDto } = command;

        // Saving the potential student data into the database
        const potentialStudent = await this.studentManagementRepository.create(createPotentialStudentDto);

        // Creating a new PotentialStudentRegisteredEvent with the potentialStudent data
        const student = new PotentialStudentRegisteredEvent(potentialStudent);

        // Merge the event with the EventPublisher context to track its operations
        const event = this.publisher.mergeObjectContext(student);

        // Publish the event to trigger any registered event handlers for this event
        event.publish(event);
    }
}
