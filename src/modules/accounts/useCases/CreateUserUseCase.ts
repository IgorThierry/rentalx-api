import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUsersRepository } from '../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(data: ICreateUserDTO) {
    const { name, username, email, password, driver_license } = data;

    await this.usersRepository.create({
      name,
      username,
      email,
      password,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
