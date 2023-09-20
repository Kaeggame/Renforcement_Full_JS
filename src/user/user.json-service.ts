import { readFileSync } from 'fs';
import { User } from './user';
import { UserService } from './user.service';

export class UserJSONService implements UserService {
    add(username: string): User {
        throw new Error('Method not implemented.');
    }

    getById(id: number): User | null {
        console.log(JSON.parse(readFileSync('src/db/data.json').toString()));
        return {
            id,
            username: 'test',
        };
    }
}