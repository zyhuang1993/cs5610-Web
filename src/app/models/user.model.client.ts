export class User {
  userId: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;

  constructor(userId, username, password, firstName, lastName) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }

}
