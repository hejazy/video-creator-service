import * as fs from 'fs';
import { BASE_OUT_DIR } from 'src/constants';

export const createFolders = (id) =>{
    if (!fs.existsSync(BASE_OUT_DIR)){
        fs.mkdirSync(BASE_OUT_DIR);
    }
    fs.mkdirSync(`${BASE_OUT_DIR}/${id}`);
    fs.mkdirSync(`${BASE_OUT_DIR}/${id}/images`);
    fs.mkdirSync(`${BASE_OUT_DIR}/${id}/video`);
}