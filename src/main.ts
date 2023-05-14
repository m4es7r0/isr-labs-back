import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      process.env.CLIENT_URL || 'https://isr-labs-back.vercel.app/registration',
    ],
  });
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
