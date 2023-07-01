import { ICommand } from "@nestjs/cqrs";
import { createPotentialTestDto } from "../dto/create-potentialTest.dto";

/**
 * Command class for creating a potential test.
 */
export class CreatePotentialTestCommand implements ICommand {
    /**
     * Creates an instance of CreatePotentialTestCommand.
     * @param createPotentialTestDto The DTO object containing the data for creating a potential test.
     */
    constructor(public readonly createPotentialTestDto: createPotentialTestDto) {}
}
