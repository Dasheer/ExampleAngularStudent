import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  title:String = "Students list";

  students!: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getAll().subscribe(
      s => this.students = s
    )
  }

  delete(student: Student): void {
    console.log("Student deleted");
    this.studentService.delete(student.id).subscribe(
      res => this.studentService.getAll().subscribe(
        response => this.students = response
      )
    );
  }

}
