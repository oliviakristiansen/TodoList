import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../../../model/task';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private tasksRoute = 'http://localhost:3000/tasks';
  public model: Task;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    this.http.get(this.tasksRoute + '/' + id).subscribe(task => {
      this.model = task as Task;
      console.log('Task', this.model);
    });
  }

  goBack() {
    this.location.back();
  }
}
