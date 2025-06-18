import { Controller, Get } from '@nestjs/common';
import { User } from '@task-manager/shared-types';
@Controller('users')
export class UsersController {
  @Get()
  getUsers(): User[] {
    return [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
    ];
  }
}
