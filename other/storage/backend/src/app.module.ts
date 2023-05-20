import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { staticConfig } from './configs/static.config';

@Module({
  imports: [ConfigModule.forRoot(), ServeStaticModule.forRoot(staticConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
