import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { AbstractService } from '@app/common';
import { Meeting } from 'apps/meeting-management/src/schemas/meeting.schema';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetScheduledMeetingQuery } from './queries/schedule-meeting.query';
import { ScheduleMeetingCommand } from './commands/schedule-meeting.command';

@Controller('meeting-management')
export class MeetingManagementController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly abstractMeetingService: AbstractService<Meeting>,
  ) {}

  @Post()
  async create(@Body() createMeetingDto: CreateMeetingDto) {
    try {
      const command = new ScheduleMeetingCommand(createMeetingDto);

      await this.commandBus.execute(command);

      return {
        status: 201,
        message: 'Created Meeting'
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Get()
  async findAll() {
    try {
      const meetings = await this.abstractMeetingService.find({});

      return { status: 200, data: { meetings } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const query = new GetScheduledMeetingQuery(id);

      const meeting = await this.queryBus.execute(query);

      return { status: 200, data: { meeting } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatemeetingDto: UpdateMeetingDto,
  ) {
    try {
      const meeting = await this.abstractMeetingService.update(
        id,
        updatemeetingDto,
      );

      return {
        status: 200,
        message: 'Updated Meeting',
        data: { meeting },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      const meeting = await this.abstractMeetingService.delete(id);

      return {
        status: 200,
        message: 'Deleted Meeting',
        data: { meeting },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @MessagePattern('teacher_notifications')
  public async GetNotifications(@Payload() data: any) {
    console.log('Message: ', data);
  }

  @MessagePattern('potentialStudent_notifications')
  public async getMeetings(@Payload() data: any) {
    console.log('Message: ', data);
  }
}