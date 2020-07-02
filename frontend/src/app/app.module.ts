import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseAddComponent } from './exercise-add/exercise-add.component';
import { ExerciseEditComponent } from './exercise-edit/exercise-edit.component';
import { ExerciseGetComponent } from './exercise-get/exercise-get.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatTableModule, MatListModule, MatButtonModule, MatPaginatorModule, MatSortModule, MatTooltipModule, MatSnackBarModule } from  '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ExercisesService } from './exercises.service';
import { CKEditorModule } from 'ng2-ckeditor';
import { EditorComponent } from './editor/editor.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { SetAddComponent } from './set-add/set-add.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseAddComponent,
    ExerciseEditComponent,
    ExerciseGetComponent,
    EditorComponent,
    SetAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    SlimLoadingBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    CKEditorModule,
    FormsModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSelectModule,
    DragDropModule
  ],
  providers: [
    ExercisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
