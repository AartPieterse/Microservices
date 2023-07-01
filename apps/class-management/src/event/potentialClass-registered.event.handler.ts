/**
 * Event handler for the PotentialClassRegisteredEvent.
 * Handles the event and performs the necessary operations.
 */
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PotentialClassRegisteredEvent } from './potentialClass-registered.event';
import { AbstractRepository, RabbitmqService } from '@app/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialClass } from '../schemas/potentialClass.schema';
import { Model } from 'mongoose';

@EventsHandler(PotentialClassRegisteredEvent)
export class PotentialClassRegisteredEventHandler implements IEventHandler<PotentialClassRegisteredEvent> {
    /**
     * Constructs an instance of PotentialClassRegisteredEventHandler.
     * @param potentialClass The Mongoose model for PotentialClass.
     * @param rabbitmqService The RabbitmqService for sending notifications.
     */
    constructor(
        @InjectModel(PotentialClass.name) private readonly potentialClass: Model<PotentialClass>,
        private readonly rabbitmqService: RabbitmqService
    ) {}

    /**
     * Handles the PotentialClassRegisteredEvent and performs the necessary operations.
     * @param event The PotentialClassRegisteredEvent instance.
     */
    async handle(event: PotentialClassRegisteredEvent): Promise<void> {
        // Send a notification to the study using RabbitMQ
        const message = `A new class named: ${PotentialClass.name} has been made`;

        await this.rabbitmqService.sendMessage('study-notification', message);
    }
}
