import { Body, Controller, Header, Post, StreamableFile, UsePipes } from '@nestjs/common';
import { GenerateService } from '../services';
import { JoiValidationPipe } from '../pipes';
import { GenreateVideoSchema } from '../dtos';
import { IGenreateVideoDTO } from '../interfaces';

@Controller('generate')
export class GenerateController {
  constructor(private readonly generateService: GenerateService) {}

  @Post()
  @UsePipes(
    new JoiValidationPipe({
      query: GenreateVideoSchema,
    }),
  )
  @Header('content-type', 'video/mp4')
  getVideo(@Body() data: IGenreateVideoDTO): Promise<StreamableFile> {
    return this.generateService.getVideo({images: data.images});
  }
}
