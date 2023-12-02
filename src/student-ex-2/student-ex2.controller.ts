import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentServiceEx2 } from './student-ex2.service';

@Controller('student-ex2')
export class StudentControllerEx2 {
  constructor(private readonly studentService: StudentServiceEx2) {}

  @Get()
  getStudents() {
    return this.studentService.findAll();
  }

  @Post()
  createStudent(@Body() student) {
    return this.studentService.createOne(student);
  }

  @Put(':id')
  updateStudent(@Param('id') id, @Body() student) {
    return this.studentService.updateOne(id, student);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id) {
    return this.studentService.deleteOne(id);
  }
}
