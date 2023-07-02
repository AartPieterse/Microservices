// Import necessary modules and classes
import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacherDto } from './create-teacher.dto';

/**
 * Data transfer object for updating a teacher.
 * Extends the `PartialType` class from `@nestjs/mapped-types`.
 */
export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {}

