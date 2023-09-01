import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { GenerateService } from '../services';
import { JoiValidationPipe } from '../pipes';
import { GenreateVideoSchema, IGenreateVideoDTO } from '../dtos';

@Controller()
export class GenerateController {
  constructor(private readonly generateService: GenerateService) {}

  @Post()
  @UsePipes(
    new JoiValidationPipe({
      query: GenreateVideoSchema,
    }),
  )
  getVideo(@Body() data: IGenreateVideoDTO): string {
    return this.generateService.getVideo();
  }
}
