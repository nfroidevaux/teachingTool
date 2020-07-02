import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  uri = 'http://localhost:4000/exercises';

  constructor(private http: HttpClient) { }

  addExercise(ExerciseName, ExerciseDescription, ExerciseSolution) {
    const obj = {
      ExerciseName, ExerciseDescription, ExerciseSolution
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  getExercises() {
    return this.http.get(`${this.uri}`);
  }

  editExercise(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateExercise(ExerciseName, ExerciseDescription, ExerciseSolution, id) {
    const obj = {
      ExerciseName,
      ExerciseDescription,
      ExerciseSolution
    };
    this.http.post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Updated'));
  }

  deleteExercise(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
