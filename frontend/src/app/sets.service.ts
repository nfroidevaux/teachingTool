import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetsService {

  uri = 'http://localhost:4000/sets';

  constructor(private http: HttpClient) { }

  addSet(SetName, Exercises) {
    const obj = {
      SetName, Exercises
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Set added'));
  }

  getSets() {
    return this.http.get(`${this.uri}`);
  }

  editSet(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateSet(SetName, Exercises, id) {
    const obj = {
      SetName,
      Exercises
    };
    this.http.post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Set updated'));
  }

  deleteSet(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }

}
