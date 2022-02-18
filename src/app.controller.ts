import { Controller, Get, Param, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { UrlService } from './url/url.service';

@ApiTags('Index')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private urlService: UrlService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':shortUrl')
  async findOne(@Param('shortUrl') shortUrl: string, @Res() res) {
    const url = await this.urlService.redirectToShort(shortUrl);
    return res.redirect(url.destinationUrl);
  }
}
