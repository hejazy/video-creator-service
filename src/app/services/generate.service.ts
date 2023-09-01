import { Injectable } from '@nestjs/common';
import { IGenreateVideoDTO } from '../interfaces';

@Injectable()
export class GenerateService {
  getVideo(data: IGenreateVideoDTO): string {
    console.log(data)
    return 'Hello World!';
  }
}
