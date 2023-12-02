import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { studentProviders } from './student.provider';
import { StudentServiceEx2 } from './student-ex2.service';
import { StudentControllerEx2 } from './student-ex2.controller';

@Module({
  controllers: [StudentControllerEx2],
  imports: [DatabaseModule],
  providers: [...studentProviders, StudentServiceEx2],
})
export class StudentModuleEx2 {}
