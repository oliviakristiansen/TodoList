import { Component, OnInit } from '@angular/core';
import { Task } from '../../../../model/task';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  private contactRoute = 'http://localhost:3000/tasks';

  model: Task = new Task();

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.http.post(this.contactRoute, this.model).subscribe((res: Response) => {
      this.router.navigate(['']);
    });
  }
}
