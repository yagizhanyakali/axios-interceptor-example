import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CustomHttpService extends HttpService {
  constructor() {
    const instance = axios.create({
      baseURL: 'https://dummy.restapiexample.com/api/v1',
      headers: {
        Authorization: 'Bearer token',
      },
    });

    instance.interceptors.request.use((req) => {
      console.log('Request sent:', req.url, req.headers);
      return req;
    });

    instance.interceptors.response.use((res) => {
      if (res.status === 200) {
        res.config.headers.Authorization = 'Bearer new';
        console.log(res.config.url, 'Request successful');
      }
      console.log(
        'Response received:',
        res.config.url,
        res.status,
        res.config.headers,
      );
      return res;
    });
    super(instance);
  }
}
