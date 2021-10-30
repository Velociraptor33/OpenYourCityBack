import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserCreateDto, UserDto } from '../user/dtos';

@Controller()
export class AuthController {

  constructor(private authService: AuthService) {
  }

  @Post('register')
  async register(@Body() userCreateDto: UserCreateDto): Promise<UserDto> {
    return this.authService.register(userCreateDto);
  }
}
