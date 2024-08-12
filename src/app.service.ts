import { Injectable } from '@nestjs/common';
import { TokenService } from './token/token.service';
import { CustomHttpService } from './custom-http/custom-http.service';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly httpService: CustomHttpService,
  ) {}
  async getHello(): Promise<any> {
    const token = this.tokenService.getToken();

    const response = await firstValueFrom(
      this.httpService.get('/employees', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    );

    return response.data;
  }
}
