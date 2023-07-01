import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreatePotentialClassCommand } from "./create-potentialClass.command";
import { ClassManagementRepository } from "../class-management.repository";
import { PotentialClassRegisteredEvent } from "../event/potentialClass-registered.event";
@CommandHandler(CreatePotentialClassCommand)
export class CreatePotentialClassCommandHandler implements ICommandHandler<CreatePotentialClassCommand> {

    constructor(
        
        private readonly publisher: EventPublisher, 
        private classManagementRepository: ClassManagementRepository
        ){}

    async execute(command: CreatePotentialClassCommand): Promise<any> {
        console.log("Triggered Command Handler")


        const { createPotentialClassDto } = command;

        // Saving test into database
        const potentialClass = await this.classManagementRepository.create(createPotentialClassDto);
        const classManagement = new PotentialClassRegisteredEvent(potentialClass);

       
        const event = this.publisher.mergeObjectContext(classManagement);
        event.commit();
    }
    
}
