import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { ModuleFactory } from './module.factory';
import { ModuleController } from './module.controller';
import { DatabaseModule, RmqModule } from '@app/common';
import { MODULE_SERVICE } from './constants/services';
import { ModuleCommandHandlers } from './commands';
import { ModuleDtoRepository } from './db/module-dto.repository';
import { ModuleEntityRepository } from './db/module-entity.repository';
import { ModuleSchemaFactory } from './db/module-schema.factory';
import { ModuleSchema } from './db/module.schema';
import { ConfigModule } from '@nestjs/config';
import { ModuleEventHandlers } from './events';
import { ModuleQueryHandlers } from './queries';
import { Teacher } from 'apps/student-management/src/schemas/teacher.schema';
import { TeacherSchema } from 'apps/student-management/src/schemas/teacher.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/module-management/.env',
    }),
    RmqModule.register({ name: MODULE_SERVICE }),
    DatabaseModule,
    CqrsModule,
    // Import MongooseModule and specify the schemas to be used
    MongooseModule.forFeature([
      {
        name: ModuleSchema.name,
        schema: SchemaFactory.createForClass(ModuleSchema),
      },
      { name: Teacher.name, schema: TeacherSchema },
    ]),
  ],
  controllers: [ModuleController],
  providers: [
    ModuleEntityRepository,
    ModuleDtoRepository,
    ModuleSchemaFactory,
    ModuleFactory,
    ...ModuleCommandHandlers,
    ...ModuleEventHandlers,
    ...ModuleQueryHandlers,
  ],
})
export class ModuleModule {}
