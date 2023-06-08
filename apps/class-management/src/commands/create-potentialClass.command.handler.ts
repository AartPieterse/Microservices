import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreatePotentialTestCommand } from "./create-potentialTest.command";
import { PotentialTest } from "../schemas/potentialTest.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { PotentialTestRegisteredEvent } from "../../events/potentialTest-registered.event";
import { TestProgramRepository } from "../../test-program.repository";

@CommandHandler(CreatePotentialTestCommand)
export class CreatePotentialTestCommandHandler implements ICommandHandler<CreatePotentialTestCommand> {

    constructor(
        @InjectModel(PotentialTest.name) private readonly potentialTestModel: Model<PotentialTest>,
        private readonly publisher: EventPublisher, private testProgramRepository: TestProgramRepository) {}

    async execute(command: CreatePotentialTestCommand): Promise<any> {
        const { name, study, phoneNumber, email } = command;

        // Saving test into database
        const potentialTest = await this.testProgramRepository.create(new this.potentialStudentModel({ name, study, phoneNumber, email }));
        const test = new PotentialTestRegisteredEvent(potentialTest._id.toString(), potentialTest.name, potentialTest.study, potentialTest.phoneNumber, potentialTest.email);

        const event = this.publisher.mergeObjectContext(test);
        event.commit();
    }
    
}