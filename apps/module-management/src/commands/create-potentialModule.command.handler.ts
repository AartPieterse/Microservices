import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreatePotentialModuleCommand } from "./create-potentialModule.command";
import { ModuleManagementRepository } from "../module-management.repository";
import { PotentialModuleRegisteredEvent } from "../events/potentialModule-registered.event"

/**
 * Command handler for creating potential modules.
 */
@CommandHandler(CreatePotentialModuleCommand)
export class CreatePotentialModuleCommandHandler implements ICommandHandler<CreatePotentialModuleCommand> {

    constructor(
        private readonly publisher: EventPublisher,
        private moduleManagementRepository: ModuleManagementRepository
    ) {}

    /**
     * Executes the create potential module command.
     * @param command The create potential module command.
     * @returns A promise that resolves to the result of the execution.
     */
    async execute(command: CreatePotentialModuleCommand): Promise<any> {
        console.log("Triggered Command Handler")

        const { createPotentialModuleDto } = command;

        // Saving potential module into the database
        const potentialModule = await this.moduleManagementRepository.create(createPotentialModuleDto);
        
        // Create a PotentialModuleRegisteredEvent with the saved potential module
        const moduleManagement = new PotentialModuleRegisteredEvent(potentialModule);

        // Publish the event using the EventPublisher
        const event = this.publisher.mergeObjectContext(moduleManagement);
        event.commit();
    }
}
