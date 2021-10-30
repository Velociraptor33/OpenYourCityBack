import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserCreateDto, UserDto } from './dtos';
import { UserEntity } from './entities';
import { UserMappers } from './mappers';

@Injectable()
export class UserService {

  private readonly users: UserEntity[] = [
    {
      id: 0,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe.com',
      password: 'hello',
      createdAt: new Date(),
    }
  ];

  async findOne(id: number): Promise<UserDto> {
    const user = this.users.find(u => u.id === id);

    if (!user) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }

    return Promise.resolve(UserMappers.toUserDto(user));
  }

  async create(dto: UserCreateDto): Promise<UserDto> {
    const user: UserEntity = {
      ...dto,
      id: 1,
      createdAt: new Date(),
    };

    return Promise.resolve(UserMappers.toUserDto(user));
  }
}
