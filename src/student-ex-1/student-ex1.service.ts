import { Injectable } from '@nestjs/common';
import { IStudent } from './student.interface';

@Injectable()
export class StudentServiceEx1 {
  private readonly students: IStudent[] = [
    { name: 'Ivan', age: 30 },
    { name: 'Georgi', age: 25 },
  ];
  constructor() {}

  findAll(): IStudent[] {
    return this.students;
  }
}
