import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TasksComponent } from './components/tasks/tasks.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { TaskComponent } from './components/task/task.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  declarations: [
    TasksComponent,
    NewTaskComponent,
    UpdateTaskComponent,
    TaskComponent,
    DetailsComponent
  ],
  exports: [
    TasksComponent,
    NewTaskComponent,
    UpdateTaskComponent,
    TaskComponent,
    DetailsComponent
  ]
})
export class TasksModule {}
