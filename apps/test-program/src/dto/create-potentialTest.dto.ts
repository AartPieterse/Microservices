import { AbstractDocument } from "@app/common";
import { IsArray, IsNotEmpty, IsString, IsNumber } from "class-validator";

/**
 * DTO class for creating a potential test.
 */
export class createPotentialTestDto extends AbstractDocument {
  /**
   * The module associated with the potential test.
   */
  @IsString()
  @IsNotEmpty()
  module: string;

  /**
   * The name of the potential test.
   */
  @IsString()
  @IsNotEmpty()
  name: string;

  /**
   * The duration of the potential test (in minutes).
   */
  @IsNumber()
  @IsNotEmpty()
  duration: number;

  /**
   * The educational credits (EC) associated with the potential test.
   */
  @IsNumber()
  @IsNotEmpty()
  ec: number;

  /**
   * An array of questions for the potential test.
   */
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  questions: string[];

  /**
   * An array of answers corresponding to the questions of the potential test.
   */
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  answers: string[];
}
