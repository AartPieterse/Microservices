import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreatePotentialTestCommand } from "./create-potentialTest.command";
import { PotentialTestRegisteredEvent } from "../events/potentialTest-registered.event";
import { TestProgramRepository } from "../test-program.repository";
@CommandHandler(CreatePotentialTestCommand)
export class CreatePotentialTestCommandHandler implements ICommandHandler<CreatePotentialTestCommand> {

    constructor(
        
        private readonly publisher: EventPublisher, 
        private testProgramRepository: TestProgramRepository
        ){}

    async execute(command: CreatePotentialTestCommand): Promise<any> {
        console.log("Triggered Command Handler")


        const { createPotentialTestDto } = command;

        // Saving test into database
        const potentialTest = await this.testProgramRepository.create(createPotentialTestDto);
        const test = new PotentialTestRegisteredEvent(potentialTest);

       
        const event = this.publisher.mergeObjectContext(test);
        event.commit();
    }
    
}


