import { User } from './user';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    add(username: string): User {
        return this.userService.add(username);
    }

    getById(id: number): User | null {
        return this.userService.getById(id);
    }
}