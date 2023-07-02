import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Patch
} from '@nestjs/common';
import { ModuleManagementService } from './module-management.service';
import { CreatePotentialModuleDto } from './dto/CreatePotentialModuleDto';
import { UpdatePotentialModuleDto } from './dto/UpdatePotentialModuleDto';

@Controller('module-management')
export class ModuleManagementController {
  constructor(
    private readonly potentialModuleService: ModuleManagementService,
  ) {}

  /**
   * Create a new potential module.
   *
   * @param createPotentialModuleDto - The data for creating a potential module.
   * @returns The created potential module.
   */
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

  /**
   * Get all potential modules.
   *
   * @returns All potential modules.
   */
  @Get()
  async findAll() {
    try {
      const modules = await this.potentialModuleService.findAll();

      return { status: 200, data: { modules } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  /**
   * Get a potential module by its ID.
   *
   * @param id - The ID of the potential module.
   * @returns The potential module with the specified ID.
   */
  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const module = await this.potentialModuleService.findById(id);

      return { status: 200, data: { module } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  /**
   * Update a potential module.
   *
   * @param id - The ID of the potential module.
   * @param updatePotentialModuleDto - The updated data for the potential module.
   * @returns The updated potential module.
   */
  @Patch(':id')
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
  

  /**
   * Delete a potential module.
   *
   * @param id - The ID of the potential module to delete.
   * @returns The deleted potential module.
   */
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
