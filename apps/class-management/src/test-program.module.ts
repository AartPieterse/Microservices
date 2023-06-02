import { Module } from '@nestjs/common';
import { TestProgramController } from './test-program.controller';
import { TestProgramService } from './test-program.service';

@Module({
  imports: [],
  controllers: [TestProgramController],
  providers: [TestProgramService],
})
export class TestProgramModule {}
