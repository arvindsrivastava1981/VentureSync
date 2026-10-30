import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'venturesync-secret-key',
    });
  }

  async validate(payload: { sub: number; username: string; role: string }): Promise<any> {
    const user = await this.usersService.findByUsername(payload.username);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return { id: user.id, username: user.username, role: user.role };
  }
}