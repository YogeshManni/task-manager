import { Controller, Get } from '@nestjs/common';
import { Task } from '@task-manager/shared-types';
@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): Task[] {
    return [
      { id: 1, title: 'Buy groceries', completed: false },
      { id: 2, title: 'Finish project', completed: true },
    ];
  }
}
