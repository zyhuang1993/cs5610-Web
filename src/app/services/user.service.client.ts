import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  users: User[] = [
    {userId: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {userId: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {userId: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    {userId: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  ];

  constructor() {}

  api = {
    createUser: this.createUser,
    findUserById: this.findUserById,
    findUserByUsername: this.findUserByUsername,
    findUserByCredentials: this.findUserByCredentials,
    updateUser: this.updateUser,
    deleteUser: this.deleteUser
  };

  createUser(user: any) {
    user.userId = this.randomID();
    this.users.push(user);
  }

  findUserById(userId: string) {
    return this.users.find((user) => {
      return user.userId === userId;
    });
  }

  findUserByUsername(username: string) {
    return this.users.find((user) => {
      return user.username === username;
    });
  }

  findUserByCredentials(username: string, password: string) {
    return this.users.find((user) => {
      return user.username === username && user.password === password;
    });
  }

  updateUser(userId, user) {
    for (const i in this.users) {
      if (this.users[i].userId === userId) {
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
      }
    }
  }

  deleteUser(userId: string) {
    for (const i in this.users) {
      if (this.users[i].userId === userId) {
        const j = +i;
        this.users.splice(j, 1);
        break;
      }
    }
  }

  private randomID(): string {
    const num = Math.floor(Math.random() * 1000) + 1;
    console.log(this.users);
    return num.toString();
  }
}
