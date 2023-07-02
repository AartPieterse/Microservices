import { PartialType } from '@nestjs/mapped-types';
import { CreatePotentialClassDto } from './CreatePotentialClassDto';

/**
 * DTO for updating a potential class.
 * Extends the CreatePotentialClassDto with partial properties.
 */
export class UpdatePotentialClassDto extends PartialType(CreatePotentialClassDto) {}
