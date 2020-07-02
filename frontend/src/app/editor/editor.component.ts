import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  panelOpenState = false;

  name = 'ng2-ckeditor';
  ckeConfig: any;
  myContent: any;
  log: string = '';
  @ViewChild('myCKEditor', {static: true}) ckeditor: any;

  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myContent = `<p>my html content</p>`;
    this.createForm();
  }

  ngOnInit() {
    this.ckeConfig = {
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

  saveFile() {
    console.log("save clicked");
  }

}
