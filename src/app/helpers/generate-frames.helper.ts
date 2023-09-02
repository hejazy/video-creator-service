import * as fs from 'fs';
import { Canvas, loadImage } from 'canvas';
import { BASE_OUT_DIR, FRAMES_PER_SEC } from 'src/constants';
import { IImage } from '../interfaces';

export const generateFreames = async (images: IImage[], id: string) => {
  const c = new Canvas(1280, 720);
  const ctx = c.getContext('2d');
  let fremesCounter = 0;
  for (let image of images) {
    const currentImage = await loadImage(image.url);       
    ctx.clearRect(0, 0, c.width, c.height);
    var wrh = currentImage.width / currentImage.height;
    var newWidth = c.width;
    var newHeight = newWidth / wrh;
    if (newHeight > c.height) {
      newHeight = c.height;
      newWidth = newHeight * wrh;
    }
    var xOffset = newWidth < c.width ? ((c.width - newWidth) / 2) : 0;
    var yOffset = newHeight < c.height ? ((c.height - newHeight) / 2) : 0;
    ctx.drawImage(currentImage, xOffset, yOffset, newWidth, newHeight);
    console.log(image.delay)
    const framesCount = (image.delay / 1000) * FRAMES_PER_SEC
    const output = c.toBuffer('image/png');
    for (let i = 0; i < framesCount; i++) {
      fremesCounter++;
      const paddedNumber = String(fremesCounter).padStart(5, '0');
      await fs.promises.writeFile(`${BASE_OUT_DIR}/${id}/images/frame-${paddedNumber}.png`, output);
    }
  }
}

