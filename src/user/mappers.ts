import { UserEntity } from './entities';
import { UserDto } from './dtos';

export module UserMappers {

  export function toUserDto(data: UserEntity): UserDto {
    const { password, ...dto } = data;
    return dto;
  }
}
