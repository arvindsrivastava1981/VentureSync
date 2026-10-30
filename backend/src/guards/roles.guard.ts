import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user || !user.role) {
      return false;
    }

    // The required role is set in the decorator
    const requiredRole = (user as any).metadata?.requiredRole;

    if (!requiredRole) {
      return true; // No role requirement, allow access
    }

    return user.role === requiredRole;
  }
}