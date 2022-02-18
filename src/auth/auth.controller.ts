import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthResponse } from './doc/auth.response';
import { AuthService } from './shared/auth.service';
import { LocalAuthGuard } from './shared/local-auth.guard';

@Controller()
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiCreatedResponse({ type: AuthResponse })
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
