import { Module } from '@nestjs/common';
import { Axios } from 'axios';
import { CustomHttpService } from './custom-http.service';

export const AXIOS_INSTANCE_TOKEN = 'AXIOS_INSTANCE_TOKEN';

@Module({
  providers: [
    {
      provide: AXIOS_INSTANCE_TOKEN,
      useValue: Axios,
    },
    CustomHttpService,
  ],
  exports: [CustomHttpService],
})
export class CustomHttpModule {}
