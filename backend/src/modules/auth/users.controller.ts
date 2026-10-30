import { Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('role') role: string,
    @Body('name') name: string,
  ) {
    const password_hash = await bcryptjsjs.hash(password, 10);
    const user = await this.usersService.userRepository.save({
      username,
      password_hash,
      role,
      name,
    });
    return { id: user.id, username: user.username, role: user.role, name: user.name };
  }

  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    const user = await this.usersService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return {
      access_token: this.usersService.getToken(user),
    };
  }
}