import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './User.entity';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async hashPassword(password: string): Promise<string> {
    return await bcryptjs.hash(password, 10);
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { username } });
  }

  async findById(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.findByUsername(username);
    if (!user) {
      return null;
    }
    const passwordsMatch = await bcryptjs.compare(password, user.password_hash);
    if (!passwordsMatch) {
      return null;
    }
    return user;
  }

  async getToken(user: User): Promise<string> {
    const jwt = require('jsonwebtoken');
    return jwt.sign(
      { sub: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET || 'venturesync-secret-key',
      { expiresIn: '1h' },
    );
  }

  async createUser(data: {
    username: string;
    password_hash: string;
    role: string;
    name: string;
  }): Promise<User> {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  async updateUser(id: number, data: Partial<User>): Promise<User | null> {
    await this.userRepository.update(id, data);
    return this.findById(id);
  }
}