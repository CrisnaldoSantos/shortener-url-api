import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Shortener Url Api')
    .setDescription(
      'Back-end contruído em NodeJs com NestJS que encurta URLs. É possível utilizar anonimamente ou criando uma conta na aplicação. Anonimamente é possível gerar URLs encurtadas e ter acesso a página de análise que retorna as 100 urls mais acessadas. Com a autenticação é possível visualizar uma nova aba denominada "Minhas Urls" pela qual é possivel ter acesso as urls geradas quando logado e excluí-las da aplicação.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
