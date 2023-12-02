import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentServiceEx2 {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  createOne(student) {
    return this.studentRepository.save(student);
  }

  async updateOne(id, student) {
    await this.studentRepository.update(id, student);
    return this.studentRepository.findOne({ where: { id } });
  }

  async deleteOne(id) {
    return this.studentRepository.delete(id);
  }
}
