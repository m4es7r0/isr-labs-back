import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [process.env.CLIENT_URL, "https://isr-labs.netlify.app"],
    },
  });
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
