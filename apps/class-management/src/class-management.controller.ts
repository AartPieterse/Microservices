import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClassManagementService } from './class-management.service'
import { CreatePotentialClassDto } from './dto/CreatePotentialClassDto';
import { UpdatePotentialClassDto } from './dto/UpdatePotentialClassDto';

@Controller('class-management')
export class ClassManagementController {
  constructor(
    private readonly potentialClassService: ClassManagementService,
  ) {}

  @Post()
  async create(@Body() createPotentialClassDto: CreatePotentialClassDto) {
    try {
      const potentialClass = await this.potentialClassService.create(
        createPotentialClassDto,
      );

      return {
        status: 201,
        message: 'Created Potential Class',
        data: { potentialClass },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Get()
  async findAll() {
    try {
      const classes = await this.potentialClassService.findAll();

      return { status: 200, data: { classes } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    try {
      const classes = await this.potentialClassService.findById(id);

      return { status: 200, data: { classes } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePotentialClassDto: UpdatePotentialClassDto,
  ) {
    try {
      const potentialClass = await this.potentialClassService.update(
        id,
        updatePotentialClassDto,
      );

      return {
        status: 200,
        message: 'Updated Potential class',
        data: { potentialClass },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      const potentialClass = await this.potentialClassService.delete(id);

      return {
        status: 200,
        message: 'Deleted Potential class',
        data: { potentialClass },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }
}
