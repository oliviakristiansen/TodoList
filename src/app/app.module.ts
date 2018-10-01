import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksModule } from './modules/tasks/tasks.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, TasksModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
