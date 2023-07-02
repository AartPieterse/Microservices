import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreatePotentialStudentCommand } from "./create-potentialStudent.command";
import { PotentialStudentRegisteredEvent } from "../../events/potentialStudent-registered.event";
import { PotentialStudentService } from "../../potentialStudent/potentialStudent.service";
import { TeacherService } from "../../teacher/teacher.service";
import { RabbitmqService } from "@app/common";

@CommandHandler(CreatePotentialStudentCommand)
export class CreatePotentialStudentCommandHandler implements ICommandHandler<CreatePotentialStudentCommand> {

    constructor(
        private readonly publisher: EventPublisher, private readonly potentialStudentService: PotentialStudentService, private readonly teacherService: TeacherService, private readonly rabbitmqService: RabbitmqService) {}

    async execute(command: CreatePotentialStudentCommand): Promise<any> {
        const { createPotentialStudentDto } = command;

        // Saving student into database
        const potentialStudent = await this.potentialStudentService.create(createPotentialStudentDto);
        const student = new PotentialStudentRegisteredEvent(potentialStudent);


        // Publish event
        const event = this.publisher.mergeObjectContext(student);
        event.publish(event);

        const teacher = await this.teacherService.findByStudy(createPotentialStudentDto.study);
    
        // Send a notification to the teacher using RabbitMQ
        const message = `Hello ${teacher.name}, ${createPotentialStudentDto.name} has applied for the study ${createPotentialStudentDto.study}. Contact: ${createPotentialStudentDto.email}, ${createPotentialStudentDto.phoneNumber}`
    
        await this.rabbitmqService.sendMessage('teacher_notifications', message);
    }
}