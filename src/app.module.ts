import { Module } from '@nestjs/common';
import { GenerateController } from './app/controllers';
import { GenerateService } from './app/services';

@Module({
  imports: [],
  controllers: [GenerateController],
  providers: [GenerateService],
})
export class AppModule {}
