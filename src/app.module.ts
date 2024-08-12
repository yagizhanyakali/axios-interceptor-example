import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenService } from './token/token.service';
import { CustomHttpModule } from './custom-http/custom-http.module';

@Module({
  imports: [CustomHttpModule],
  controllers: [AppController],
  providers: [AppService, TokenService],
})
export class AppModule {}
