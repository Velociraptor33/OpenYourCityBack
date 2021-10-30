import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserCreateDto, UserDto } from '../user/dtos';

@Injectable()
export class AuthService {

  constructor(private userService: UserService) {
  }

  async register(userCreateDto: UserCreateDto): Promise<UserDto> {
    return this.userService.create(userCreateDto);
  }
}
