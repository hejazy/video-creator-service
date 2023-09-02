import { Injectable, StreamableFile } from '@nestjs/common';
import { IGenreateVideoDTO } from '../interfaces';
import { generateFreames, createFolders, stitchFramesToVideo } from '../helpers';
import { v4 as uuid } from 'uuid';
import { BASE_OUT_DIR } from 'src/constants';
import { createReadStream } from 'fs';

@Injectable()
export class GenerateService {
  async getVideo({images}: IGenreateVideoDTO): Promise<StreamableFile> {
    const id = uuid();
    await createFolders(id)
    await generateFreames(images, id);
    await stitchFramesToVideo({
      framesFilepath: `${BASE_OUT_DIR}/${id}/images`,
      outputFilepath: `${BASE_OUT_DIR}/${id}/video`,
      duration: images.reduce((prev, curr)=> prev + curr.delay, 0),
    })
    const file = createReadStream(`${BASE_OUT_DIR}/${id}/video/out.mp4`);
    return new StreamableFile(file);
  }
}
