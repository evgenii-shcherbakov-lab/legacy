import { Injectable } from '@nestjs/common';
import { readdir } from 'fs/promises';
import { join } from 'path';
import { from, Observable } from 'rxjs';
import { PUBLIC_PATH } from './shared/constants';

@Injectable()
export class AppService {
  getDirs(): Observable<string[]> {
    return from(readdir(PUBLIC_PATH));
  }

  getDirContent(dirName: string) {
    return from(readdir(join(PUBLIC_PATH, dirName)));
  }
}
