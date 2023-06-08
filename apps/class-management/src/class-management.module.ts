import { Module } from '@nestjs/common';
import { TestProgramController } from './class-management.controller';
import { TestProgramService } from './class-management.service';

@Module({
  imports: [],
  controllers: [TestProgramController],
  providers: [TestProgramService],
})
export class TestProgramModule {}
