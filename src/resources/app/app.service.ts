import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  serverTest(): string {
    return 'Testing... API Hit. Test Success';
  }
}
