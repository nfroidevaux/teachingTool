import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseAddComponent } from './exercise-add/exercise-add.component';
import { ExerciseGetComponent } from './exercise-get/exercise-get.component';
import { ExerciseEditComponent } from './exercise-edit/exercise-edit.component';
import { EditorComponent } from './editor/editor.component';
import { SetAddComponent } from './set-add/set-add.component';


const routes: Routes = [
  {
    path: 'exercise/create',
    component: ExerciseAddComponent
  },
  {
    path: 'edit/:id',
    component: ExerciseEditComponent
  },
  {
    path: 'exercises',
    component: ExerciseGetComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  },
  {
    path: 'set/create',
    component: SetAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
