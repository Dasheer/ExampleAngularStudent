import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {

  student: Student = new Student();
  title: string = "Student registration";

  constructor(private studentService: StudentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.activatedRoute.params.subscribe(
      s => {
        let id = s['id'];
        if (id) {
          this.studentService.get(id).subscribe(
            sd => this.student = sd
          );
        }
      }
    );
  }

  create(): void {
    console.log(this.student);
    this.studentService.create(this.student).subscribe(
      res => this.router.navigate(['/students'])
    );
  }

  update(): void {
    this.studentService.update(this.student).subscribe(
      s => this.router.navigate(['/students'])
    );
  }
}
