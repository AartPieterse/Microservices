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

/**
 * Controller for managing potential classes.
 */
@Controller('class-management')
export class ClassManagementController {
  constructor(
    private readonly potentialClassService: ClassManagementService,
  ) {}

  /**
   * Create a new potential class.
   *
   * @param createPotentialClassDto - The data for creating a potential class.
   * @returns The created potential class.
   */
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

  /**
   * Get all potential classes.
   *
   * @returns All potential classes.
   */
  @Get()
  async findAll() {
    try {
      const classes = await this.potentialClassService.findAll();

      return { status: 200, data: { classes } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  /**
   * Get a potential class by its ID.
   *
   * @param id - The ID of the potential class.
   * @returns The potential class with the specified ID.
   */
  @Get(":id")
  async findById(@Param("id") id: string) {
    try {
      const classes = await this.potentialClassService.findById(id);

      return { status: 200, data: { classes } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  /**
   * Update a potential class.
   *
   * @param id - The ID of the potential class.
   * @param updatePotentialClassDto - The updated data for the potential class.
   * @returns The updated potential class.
   */
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

  /**
   * Delete a potential class.
   *
   * @param id - The ID of the potential class to delete.
   * @returns The deleted potential class.
   */
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
