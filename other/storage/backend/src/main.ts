import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { swaggerConfig } from './configs/swagger.config';
import { LOCAL_PORT } from './shared/constants';

const port: string | number = process.env.PORT || LOCAL_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);
  await app.listen(port, () => console.log(`Server started on port ${port}`));
}
bootstrap();
