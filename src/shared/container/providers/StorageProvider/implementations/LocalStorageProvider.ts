import fs from 'fs';
import { resolve } from 'path';

import { uploadConfig as upload } from '@config/upload';

import { IStorageProvider } from '../IStorageProvider';

class LocalStorageProvider implements IStorageProvider {
  async save(file: string, folder: string): Promise<string> {
    const destinationPath = resolve(`${upload.tmpFolder}/${folder}`);

    if (!fs.existsSync(destinationPath)) {
      fs.mkdirSync(destinationPath);
    }

    const currentFilePath = resolve(upload.tmpFolder, file);
    const newFilePath = resolve(`${upload.tmpFolder}/${folder}`, file);

    await fs.promises.rename(currentFilePath, newFilePath);

    return file;
  }

  async delete(file: string, folder: string): Promise<void> {
    const filename = resolve(`${upload.tmpFolder}/${folder}`, file);

    try {
      await fs.promises.stat(filename);
    } catch {
      return;
    }
    await fs.promises.unlink(filename);
  }
}

export { LocalStorageProvider };
