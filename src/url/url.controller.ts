import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UrlCreatedResponse } from './doc/url.response';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

@ApiTags('Url')
@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  @ApiCreatedResponse({ type: UrlCreatedResponse })
  create(@Body() createUrlDto: CreateUrlDto) {
    return this.urlService.create(createUrlDto);
  }

  @Get('/analytics')
  getAnaytics() {
    return this.urlService.analytics();
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('/user')
  findAll(@Req() req: any) {
    const { email } = req.user;
    return this.urlService.findAllByUser(email);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.urlService.remove(id);
  }
}
