import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization;

    if (!authorization || !authorization.startsWith('Bearer ')) {
      return false;
    }

    const token = authorization.split(' ')[1];

    try {
      const user = await this.authService.validateToken(token);
      request.user = user;
      return true;
    } catch (e) {
      return false;
    }
  }
}