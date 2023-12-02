import { Controller, Get } from '@nestjs/common';
import { StudentServiceEx1 } from './student-ex1.service';

@Controller('student-ex1')
export class StudentControllerEx1 {
  constructor(private readonly studentServiceEx1: StudentServiceEx1) {}

  @Get()
  getStudents() {
    return this.studentServiceEx1.findAll();
  }
}
