import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  private tasksRoute = 'http://localhost:3000/tasks';

  public model: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getTasks();
  }

  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);

    this.http
      .put(this.tasksRoute + '/' + id, this.model)
      .toPromise()
      .then(() => this.router.navigate(['']));
  }

  getTasks() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    this.http
      .get(this.tasksRoute + '/' + id)
      .subscribe(task => (this.model = task));
  }

  deleteTask() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);

    this.http
      .delete(this.tasksRoute + '/' + id)
      .toPromise()
      .then(() => this.router.navigate(['']));
  }
}
