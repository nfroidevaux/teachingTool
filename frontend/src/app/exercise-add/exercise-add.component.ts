import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ExercisesService } from '../exercises.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-exercise-add',
  templateUrl: './exercise-add.component.html',
  styleUrls: ['./exercise-add.component.css']
})
export class ExerciseAddComponent implements OnInit {

  selected = 'text';
  // solutionOptions = [
  //   { key: 'text', label: 'Text'},
  //   { key: 'singleChoice', label: 'Single Choice'},
  //   { key: 'multipleChoice', label: 'Multiple Choice'}
  // ]

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private es: ExercisesService, private _snackBar: MatSnackBar) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      ExerciseName: ['', Validators.required ],
      ExerciseDescription: ['', Validators.required ],
      ExerciseSolution: ['', Validators.required ]
    });
  }

  addExercise(ExerciseName, ExerciseDescription, ExerciseSolution) {
    this.es.addExercise(ExerciseName, ExerciseDescription, ExerciseSolution);
    this.openSnackBar('New exercise saved!', '');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
  }

}
