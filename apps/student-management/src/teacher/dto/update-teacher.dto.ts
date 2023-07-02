// Import necessary modules and classes
import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacherDto } from './create-teacher.dto';

// Define the UpdateTeacherDto class extending PartialType(CreateTeacherDto)
export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {}

