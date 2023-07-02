import { PartialType } from '@nestjs/mapped-types';
import { CreatePotentialClassDto } from './CreatePotentialClassDto';

export class UpdatePotentialClassDto extends PartialType(
  CreatePotentialClassDto,
) {}
