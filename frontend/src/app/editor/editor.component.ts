import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ExercisesService } from '../exercises.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  panelOpenState = false;

  name = 'ng2-ckeditor';
  ckeConfigExercise: any;
  exerciseContent: any;
  log: string = '';
  @ViewChild('myCKEditor', {static: true}) ckeditor: any;

  name2 = 'ng2-ckeditor2';
  ckeConfigSolution: any;
  solutionContent: any;
  log2: string = '';
  @ViewChild('myCKEditor2', {static: true}) ckeditor2: any;

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private exerciseService: ExercisesService, private _snackBar: MatSnackBar) {
    this.createForm();
  }

  ngOnInit() {
    this.ckeConfigExercise = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
    this.ckeConfigSolution = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

  createForm() {
    this.angForm = this.fb.group({
      ExerciseName: ['', Validators.required ],
      ExerciseDescription: ['', Validators.required ],
      ExerciseSolution: ['', Validators.required ]
    });
  }

  onChange($event: any): void {
    console.log('onChange');
  }

  onPaste($event: any): void {
    console.log('onPaste');
  }

  saveFile(title, exercise, solution) {
    console.log("save clicked");
    console.log(title, exercise, solution);
    this.exerciseService.addExercise(title, exercise, solution);
    this.openSnackBar('Exercise saved!', '');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
