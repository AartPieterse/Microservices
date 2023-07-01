import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreatePotentialTestCommand } from "./create-potentialTest.command";
import { PotentialTestRegisteredEvent } from "../events/potentialTest-registered.event";
import { TestProgramRepository } from "../test-program.repository";

/**
 * Command handler class responsible for handling the CreatePotentialTestCommand.
 */
@CommandHandler(CreatePotentialTestCommand)
export class CreatePotentialTestCommandHandler implements ICommandHandler<CreatePotentialTestCommand> {
    constructor(
        /**
         * The event publisher used to publish events.
         */
        private readonly publisher: EventPublisher,
        /**
         * The repository for managing test programs.
         */
        private testProgramRepository: TestProgramRepository
    ) {}

    /**
     * Executes the command handler logic.
     * @param command The CreatePotentialTestCommand instance.
     * @returns A promise that resolves to the result of the command execution.
     */
    async execute(command: CreatePotentialTestCommand): Promise<any> {
        console.log("Triggered Command Handler");

        const { createPotentialTestDto } = command;

        // Saving the test into the database
        const potentialTest = await this.testProgramRepository.create(createPotentialTestDto);
        const test = new PotentialTestRegisteredEvent(potentialTest);

        const event = this.publisher.mergeObjectContext(test);
        event.commit();
    }
}
