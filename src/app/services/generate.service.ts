import { Injectable } from '@nestjs/common';
import { IGenreateVideoDTO } from '../dtos';

@Injectable()
export class GenerateService {
  getVideo(data: IGenreateVideoDTO): string {
    console.log(data)
    return 'Hello World!';
  }
}
