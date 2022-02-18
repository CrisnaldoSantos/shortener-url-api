import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UrlCreatedResponse } from './doc/url.response';

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

  @Get()
  findAll() {
    return this.urlService.findAll();
  }

  @Get(':shortUrl')
  async findOne(@Param('shortUrl') shortUrl: string, @Res() res) {
    const url = await this.urlService.redirectToShort(shortUrl);
    return res.redirect(url.destinationUrl);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.urlService.remove(id);
  }
}
