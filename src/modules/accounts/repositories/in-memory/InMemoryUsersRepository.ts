import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../infra/typeorm/entities/User';
import { IUsersRepository } from '../IUsersRepository';

class InMemoryUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async create(data: ICreateUserDTO): Promise<void> {
    const { name, email, password, driver_license, avatar, id } = data;

    const user = new User();

    Object.assign(user, { name, email, password, driver_license, avatar });

    if (!id) {
      user.created_at = new Date();
      this.users.push(user);
      return;
    }

    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) return;

    this.users[userIndex] = { ...this.users[userIndex], ...user };
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}

export { InMemoryUsersRepository };
