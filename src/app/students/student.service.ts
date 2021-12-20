import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url:string = "http://localhost:8080/api/students";

  constructor( private http:HttpClient ) { }

  // Obtener estudiantes
  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  // Crear estudiante
  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.url, student);
  }

  // Obtener un estudiante
  get(id: number): Observable<Student> {
    return this.http.get<Student>(this.url + '/' + id);
  }

  // Actualizar estudiante
  update(student: Student): Observable<Student> {
    return this.http.put<Student>(this.url, student);
  }

  // Eliminar estudiante
  delete(id: number): Observable<Student> {
    return this.http.delete<Student>(this.url + '/' + id);
  }
}
