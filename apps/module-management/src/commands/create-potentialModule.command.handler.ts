import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreatePotentialModuleCommand } from "./create-potentialModule.command";
import { ModuleManagementRepository } from "../module-management.repository";
import { PotentialModuleRegisteredEvent } from "../events/potentialModule-registered.event"
@CommandHandler(CreatePotentialModuleCommand)
export class CreatePotentialModuleCommandHandler implements ICommandHandler<CreatePotentialModuleCommand> {

    constructor(
        
        private readonly publisher: EventPublisher, 
        private moduleManagementRepository: ModuleManagementRepository
        ){}

    async execute(command: CreatePotentialModuleCommand): Promise<any> {
        console.log("Triggered Command Handler")


        const { createPotentialModuleDto } = command;

        // Saving test into database
        const potentialModule = await this.moduleManagementRepository.create(createPotentialModuleDto)
        const moduleManagement = new PotentialModuleRegisteredEvent(potentialModule);

       
        const event = this.publisher.mergeObjectContext(moduleManagement);
        event.commit();
    }
    
}