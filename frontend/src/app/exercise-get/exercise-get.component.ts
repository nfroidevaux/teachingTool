import { Component, OnInit, ViewChild } from '@angular/core';
import Exercise from '../Exercise';
import { ExercisesService } from '../exercises.service';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import {TooltipPosition} from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-exercise-get',
  templateUrl: './exercise-get.component.html',
  styleUrls: ['./exercise-get.component.css']
})
export class ExerciseGetComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  exercises: Exercise[];
  displayedColumns = ['ExerciseName', 'ExerciseDescription', 'ExerciseSolution', 'Options'];
  dataSource: MatTableDataSource<Exercise>;

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  positionBefore = new FormControl(this.positionOptions[1]);
  positionAfter = new FormControl(this.positionOptions[0]);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private es: ExercisesService, private _snackBar: MatSnackBar) { }

  deleteExercise(id, index) {
    this.es.deleteExercise(id).subscribe(res => {
      this.exercises.splice(index, 1);
      this.dataSource.data = this.exercises;
    });
    this.openSnackBar('Exercise deleted!', '');
  }

  selectedRowIndex: number = -1;

  highlight(row) {
      console.log(row.id);
      this.selectedRowIndex = row.id;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.es
    .getExercises()
    .subscribe((data: Exercise[]) => {
      this.exercises = data;
      this.dataSource = new MatTableDataSource(this.exercises);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
