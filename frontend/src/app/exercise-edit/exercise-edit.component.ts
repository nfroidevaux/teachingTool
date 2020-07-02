import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExercisesService } from '../exercises.service';

@Component({
  selector: 'app-exercise-edit',
  templateUrl: './exercise-edit.component.html',
  styleUrls: ['./exercise-edit.component.css']
})
export class ExerciseEditComponent implements OnInit {

  angForm: FormGroup;
  exercise: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private es: ExercisesService) {
    this.createForm();
  }

  createForm() {
     this.angForm = this.fb.group({
       ExerciseName: ['', Validators.required ],
       ExerciseDescription: ['', Validators.required],
       ExerciseSolution: ['', Validators.required]
     });
  }

  updateExercise(ExerciseName, ExerciseDescrption, ExerciseSolution, id) {
    this.route.params.subscribe(params => {
      this.es.updateExercise(ExerciseName, ExerciseDescrption, ExerciseSolution, params.id);
      this.router.navigate(['exercises']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.es.editExercise(params['id']).subscribe(res => {
        this.exercise = res;
      });
    });
  }

}
