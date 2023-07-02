/**
 * Controller for handling class management related endpoints.
 */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { ClassManagementService } from './class-management.service';
import { applyClassDto } from './dto/applyClass.dto';
import { CreatePotentialClassCommand } from './commands/create-potentialClass.command';

@Controller('class-management')
export class ClassManagementController {
    /**
     * Constructs an instance of ClassManagementController.
     * @param classManagementService The service for managing class operations.
     * @param commandBus The command bus for executing commands.
     * @param eventBus The event bus for publishing events.
     */
    constructor(
        private readonly classManagementService: ClassManagementService,
        private readonly commandBus: CommandBus,
        private readonly eventBus: EventBus
    ) {}

    /**
     * Creates a potential class.
     * @param data The data for creating the potential class.
     */
    @Post()
    async createPotentialClassDto(@Body() data: applyClassDto) {
        const command = new CreatePotentialClassCommand(data);
        this.commandBus.execute(command);
    }

    /**
     * Retrieves all applications.
     * @returns A promise that resolves to the list of applications.
     */
    @Get()
    async getApplications() {
        return this.classManagementService.getApplications();
    }

    /**
     * Deletes an application by ID.
     * @param id The ID of the application to delete.
     * @returns A promise that resolves to the deleted application.
     */
    @Delete(':id')
    async deleteApplicationById(@Param('id') id: string) {
        return this.classManagementService.deleteApplicationById(id);
    }
}
