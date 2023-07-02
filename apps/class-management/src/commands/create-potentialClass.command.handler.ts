/**
 * Handles the CreatePotentialClassCommand and performs the necessary operations.
 */
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreatePotentialClassCommand } from "./create-potentialClass.command";
import { ClassManagementRepository } from "../class-management.repository";
import { PotentialClassRegisteredEvent } from "../event/potentialClass-registered.event";

@CommandHandler(CreatePotentialClassCommand)
export class CreatePotentialClassCommandHandler implements ICommandHandler<CreatePotentialClassCommand> {
    /**
     * Constructs an instance of CreatePotentialClassCommandHandler.
     * @param publisher The event publisher for publishing events.
     * @param classManagementRepository The repository for managing classes.
     */
    constructor(
        private readonly publisher: EventPublisher,
        private classManagementRepository: ClassManagementRepository
    ) {}

    /**
     * Executes the CreatePotentialClassCommand and performs the necessary operations.
     * @param command The CreatePotentialClassCommand instance.
     * @returns A promise that resolves to the result of the execution.
     */
    async execute(command: CreatePotentialClassCommand): Promise<any> {
        console.log("Triggered Command Handler");

        const { createPotentialClassDto } = command;

        // Saving potential class into the database
        const potentialClass = await this.classManagementRepository.create(createPotentialClassDto);

        // Creating a PotentialClassRegisteredEvent
        const classManagement = new PotentialClassRegisteredEvent(potentialClass);

        // Merging the event with the event context and committing it
        const event = this.publisher.mergeObjectContext(classManagement);
        event.commit();
    }
}
