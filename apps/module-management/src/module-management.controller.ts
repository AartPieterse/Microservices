import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ModuleManagementService } from './module-management.service';
import { CreatePotentialModuleDto } from './dto/CreatePotentialModuleDto';
import { UpdatePotentialModuleDto } from './dto/UpdatePotentialModuleDto';

@Controller('module-management')
export class ModuleManagementController {
  constructor(
    private readonly potentialModuleService: ModuleManagementService,
  ) {}

  @Post()
  async create(@Body() createPotentialModuleDto: CreatePotentialModuleDto) {
    try {
      const potentialModule = await this.potentialModuleService.create(
        createPotentialModuleDto,
      );

      return {
        status: 201,
        message: 'Created Potential Module',
        data: { potentialModule },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Get()
  async findAll() {
    try {
      const modules = await this.potentialModuleService.findAll();

      return { status: 200, data: { modules } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const module = await this.potentialModuleService.findById(id);

      return { status: 200, data: { module } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePotentialModuleDto: UpdatePotentialModuleDto,
  ) {
    try {
      const potentialModule = await this.potentialModuleService.update(
        id,
        updatePotentialModuleDto,
      );

      return {
        status: 200,
        message: 'Updated Potential Module',
        data: { potentialModule },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      const potentialModule = await this.potentialModuleService.delete(id);

      return {
        status: 200,
        message: 'Deleted Potential module',
        data: { potentialModule },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }
}
