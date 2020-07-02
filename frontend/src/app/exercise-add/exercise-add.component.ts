import { Component, OnInit, ViewChild } from '@angular/core';
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
  name = 'ng2-ckeditor';
  ckeConfig: any;
  myContent: any;
  log: string = '';
  @ViewChild('myCKEditor', {static: true}) ckeditor: any;

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private es: ExercisesService, private _snackBar: MatSnackBar) {
    this.myContent = `<p>my html content</p>`;
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

  onChange($event: any): void {
    console.log('onChange');
  }

  onPaste($event: any): void {
    console.log('onPaste');
  }

  saveFile() {
    console.log("save clicked");
  }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

}
