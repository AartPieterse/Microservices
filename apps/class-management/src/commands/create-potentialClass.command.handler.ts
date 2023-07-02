/**
 * Handles the CreatePotentialClassCommand and performs the necessary operations.
 */
import { CreatePotentialClassCommand } from "./create-potentialClass.command";
import { PotentialClassRegisteredEvent } from "../event/potentialClass-registered.event";
import { AbstractService } from "@app/common";
import { PotentialClass } from "../schemas/potentialClass.schema";
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";

@CommandHandler(CreatePotentialClassCommand)
export class CreatePotentialClassCommandHandler implements ICommandHandler<CreatePotentialClassCommand> {
    /**
     * Constructs an instance of CreatePotentialClassCommandHandler.
     * @param publisher The event publisher for publishing events.
     * @param classManagementRepository The repository for managing classes.
     */
    constructor(
        private readonly publisher: EventPublisher,
        private classManagementRepository: AbstractService<PotentialClass>
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
