import { PartialType } from "@nestjs/mapped-types";
import { CreatePotentialModuleDto } from "./CreatePotentialModuleDto";

export class UpdatePotentialModuleDto extends PartialType(CreatePotentialModuleDto) {}