import { Module } from '@nestjs/common';
import { StudentControllerEx1 } from './student-ex1.controller';
import { StudentServiceEx1 } from './student-ex1.service';

@Module({
  controllers: [StudentControllerEx1],
  providers: [StudentServiceEx1],
})
export class StudentModuleEx1 {}
