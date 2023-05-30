import { Module } from '@nestjs/common';
import { GuidanceProgramController } from './guidance-program.controller';
import { GuidanceProgramService } from './guidance-program.service';

@Module({
  imports: [],
  controllers: [GuidanceProgramController],
  providers: [GuidanceProgramService],
})
export class GuidanceProgramModule {}
