import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Task } from '@task-manager/shared-types';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {
  tasks: Task[] = [];

  private http = inject(HttpClient);

  ngOnInit() {
    this.http
      .get<Task[]>('http://localhost:3000/api/tasks')
      .subscribe((data) => {
        this.tasks = data;
      });
  }
}
