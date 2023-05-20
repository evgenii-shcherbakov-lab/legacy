import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Nest storage reference')
  .setDescription('Documentation for nest storage API')
  .setVersion('1.0')
  .build();
