import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './modules/tasks/components/tasks/tasks.component';
import { NewTaskComponent } from './modules/tasks/components/new-task/new-task.component';
import { UpdateTaskComponent } from './modules/tasks/components/update-task/update-task.component';
import { DetailsComponent } from './modules/tasks/components/details/details.component';

const routes: Routes = [
  {
    path: 'home',
    component: TasksComponent
  },
  {
    path: 'add',
    component: NewTaskComponent
  },
  {
    path: 'update/:id',
    component: UpdateTaskComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
