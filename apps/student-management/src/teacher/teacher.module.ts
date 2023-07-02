import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, TeacherSchema } from '../schemas/teacher.schema';
import { RmqModule } from '@app/common';
import { APPLICATION_SERVICE } from '../constants/services';

@Module({
  imports: [RmqModule.register({name: APPLICATION_SERVICE}), MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema}])],
  controllers: [TeacherController],
  providers: [TeacherService]
})
export class TeacherModule {}
