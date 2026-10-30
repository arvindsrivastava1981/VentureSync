import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './modules/auth/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateToken(token: string): Promise<any> {
    try {
      // Use the JWT_SECRET to verify the token
      const jwt = require('jsonwebtoken');
      const payload = jwt.verify(token, process.env.JWT_SECRET || 'venturesync-secret-key');
      return { id: payload.sub, username: payload.username, role: payload.role };
    } catch (e) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}