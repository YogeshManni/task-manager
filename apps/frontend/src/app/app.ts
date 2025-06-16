import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskList } from './task-list/task-list';

@Component({
  imports: [RouterModule, TaskList],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'frontend';
}
