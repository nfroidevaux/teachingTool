import { Component, OnInit } from '@angular/core';
import { SetsService } from '../sets.service';
import Exercise from '../Exercise';
import { ExercisesService } from '../exercises.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import Set from '../Set';

@Component({
  selector: 'app-set-add',
  templateUrl: './set-add.component.html',
  styleUrls: ['./set-add.component.css']
})
export class SetAddComponent implements OnInit {

  exercises: Exercise[]
  setOfExercises = [];

  constructor(private exerciseService: ExercisesService) {  }

  ngOnInit() {
    this.exerciseService.getExercises()
    .subscribe((data: Exercise[]) => {
      this.exercises = data;
      console.log(this.exercises);
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
