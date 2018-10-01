import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../../model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() deletedTask: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  deleteTask() {
    this.deletedTask.emit(this.task.id);
  }
}
