import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TokenService {
  private accessToken: string = 'your-access-token';

  constructor() {}

  // Method to get the current token
  getToken(): string {
    return this.accessToken;
  }

  // Method to refresh the token
  async refreshToken(): Promise<string> {
    const response = await axios.post('https://example.com/auth/refresh', {
      // Assuming refreshToken is required to refresh the access token
      refreshToken: 'your-refresh-token',
    });

    this.accessToken = response.data.accessToken;
    return this.accessToken;
  }
}
