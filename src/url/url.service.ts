import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUrlDto } from './dto/create-url.dto';
import { Model } from 'mongoose';
import { Url, UrlDocument } from './schemas/url.schema';

@Injectable()
export class UrlService {
  constructor(
    @InjectModel('Url')
    private readonly urlModel: Model<UrlDocument>,
  ) {}

  generateCode() {
    let code = '';
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1233456789';
    for (let i = 0; i < 5; i++)
      code += chars.charAt(Math.floor(Math.random() * chars.length));

    return code;
  }

  async create(createUrlDto: CreateUrlDto) {
    let shortUrl = null;
    let shortUrlExists = false;
    do {
      shortUrl = this.generateCode();
      shortUrlExists = await this.validateCode(shortUrl);
    } while (shortUrlExists);

    const createdUrl = new this.urlModel({
      ...createUrlDto,
      shortUrl,
      hits: 0,
    });
    await createdUrl.save();
    return { url: `${process.env.SERVER_URL}url/${shortUrl}` };
  }

  async findAll(): Promise<Url[]> {
    return this.urlModel.find().exec();
  }

  async validateCode(code: string) {
    const url = await this.urlModel.findOne({ shortUrl: code });
    if (!url) {
      return false;
    }
    return true;
  }

  async findByShort(shortUrl: string) {
    const url = await this.urlModel.findOne({ shortUrl });

    if (!url) {
      throw new HttpException(`Url not found!`, HttpStatus.NOT_FOUND);
    }
    return url;
  }

  async redirectToShort(shortUrl: string) {
    const url = await this.findByShort(shortUrl);
    url.hits += 1;
    console.log(url);
    await url.save();
    return url;
  }

  async analytics() {
    const urls = await this.urlModel
      .find()
      .skip(0)
      .limit(100)
      .sort({ hits: -1 });

    return urls;
  }

  async remove(id: string) {
    return this.urlModel.deleteOne({ _id: id }).exec();
  }
}
