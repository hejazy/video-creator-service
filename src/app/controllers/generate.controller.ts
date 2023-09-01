import { Controller, Get } from '@nestjs/common';
import { GenerateService } from '../services';

@Controller()
export class GenerateController {
  constructor(private readonly generateService: GenerateService) {}

  @Get()
  getVideo(): string {
    return this.generateService.getVideo();
  }
}
