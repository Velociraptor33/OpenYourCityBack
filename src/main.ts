import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { LogContexts } from './shared/models';

const {
  PORT
} = process.env;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);

  Logger.log(`Server started running on port ${PORT}`, LogContexts.SERVER);
}

bootstrap();
