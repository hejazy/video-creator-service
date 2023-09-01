import { Body, Controller, Post, UsePipes } from '@nestjs/common';
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
  getVideo(@Body() data: IGenreateVideoDTO): string {
    return this.generateService.getVideo({images: data.images});
  }
}
