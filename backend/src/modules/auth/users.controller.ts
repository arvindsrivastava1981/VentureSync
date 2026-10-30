import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  UseGuards,
  Request,
  UnauthorizedException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import * as bcryptjs from 'bcryptjs';

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
    const existing = await this.usersService.findByUsername(username);
    if (existing) {
      throw new ConflictException('Username already exists');
    }
    const password_hash = await bcryptjs.hash(password, 10);
    const user = await this.usersService.createUser({
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
      user: { id: user.id, username: user.username, role: user.role, name: user.name },
    };
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req: any) {
    const user = await this.usersService.findById(req.user.id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return { id: user.id, username: user.username, role: user.role, name: user.name };
  }

  @Put('profile')
  @UseGuards(JwtAuthGuard)
  async updateProfile(@Request() req: any, @Body('name') name: string) {
    const user = await this.usersService.updateUser(req.user.id, { name });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return { id: user.id, username: user.username, role: user.role, name: user.name };
  }

  @Put('change-password')
  @UseGuards(JwtAuthGuard)
  async changePassword(
    @Request() req: any,
    @Body('current_password') currentPassword: string,
    @Body('new_password') newPassword: string,
  ) {
    const user = await this.usersService.findById(req.user.id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const passwordsMatch = await bcryptjs.compare(currentPassword, user.password_hash);
    if (!passwordsMatch) {
      throw new UnauthorizedException('Current password is incorrect');
    }
    const password_hash = await bcryptjs.hash(newPassword, 10);
    await this.usersService.updateUser(req.user.id, { password_hash });
    return { message: 'Password changed successfully' };
  }
}