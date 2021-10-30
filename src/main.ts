import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  // tslint:disable-next-line:no-magic-numbers
  await app.listen(3000);
}
bootstrap();
