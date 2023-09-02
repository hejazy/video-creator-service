import * as ffmpeg from 'fluent-ffmpeg';
import { FRAMES_PER_SEC } from 'src/constants';
import {path as ffmpegPath} from'@ffmpeg-installer/ffmpeg';
import {resolve as pathResolver} from 'path'
import * as fs from 'fs';

ffmpeg.setFfmpegPath(ffmpegPath);

export async function stitchFramesToVideo({
  framesFilepath,
  outputFilepath,
  duration,
}) {
  await new Promise((resolve, reject) => {
    // var inputlist = fs.readdirSync(framesFilepath);
    // const encoder = inputlist.reduce((result, inputItem) => result.addInput(`${framesFilepath}/${inputItem}`), ffmpeg());
    // encoder
    ffmpeg().input(`${framesFilepath}/frame-%05d.png`)
      .inputOptions([
        `-framerate ${FRAMES_PER_SEC}`,
      ])
      .videoCodec('libx264')
      // .outputOptions([
      //   // YUV color space with 4:2:0 chroma subsampling for maximum compatibility with
      //   // video players
      //   '-pix_fmt yuv420p',
      // ])
      .duration(duration)
      .fps(FRAMES_PER_SEC)
      .saveToFile(pathResolver(outputFilepath + '/out.mp4'))
      .on('end', resolve)
      .on('error', (error) => reject(new Error(error)));
  });
}
