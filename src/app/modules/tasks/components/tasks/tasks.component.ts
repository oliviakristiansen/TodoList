import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../../../model/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  private tasksRoute = 'http://localhost:3000/tasks';
  tasks: Task[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.http.get<Task[]>(this.tasksRoute).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  deletedTask(taskId) {
    let index = 0;
    for (const task of this.tasks) {
      if (this.tasks === taskId) {
        this.tasks.splice(index, 1);
        break;
      }
      index++;
    }
  }
}
