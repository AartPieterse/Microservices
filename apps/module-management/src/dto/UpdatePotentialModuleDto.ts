import { PartialType } from "@nestjs/mapped-types";
import { CreatePotentialModuleDto } from "./CreatePotentialModuleDto";

/**
 * DTO for updating a potential module.
 * Extends the CreatePotentialModuleDto and allows partial updates.
 */
export class UpdatePotentialModuleDto extends PartialType(CreatePotentialModuleDto) {}
