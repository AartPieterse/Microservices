import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';

@Controller('meetings')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  @Post()
  async create(@Body() createMeetingDto: CreateMeetingDto) {
    try {
      const meeting = await this.meetingService.create(
        createMeetingDto,
      );

      return {
        status: 201,
        message: 'Created Meeting',
        data: { meeting },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Get()
  async findAll() {
    try {
      const meetings = await this.meetingService.findAll();

      return { status: 200, data: { meetings } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    try {
      const meeting = await this.meetingService.findById(id);

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
      const meeting = await this.meetingService.update(
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
      const meeting = await this.meetingService.delete(id);

      return {
        status: 200,
        message: 'Deleted Meeting',
        data: { meeting },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }
}
