import { Injectable } from '@nestjs/common';

@Injectable()
export class GenerateService {
  getVideo(): string {
    return 'Hello World!';
  }
}
