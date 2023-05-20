import { ServeStaticModuleOptions } from '@nestjs/serve-static';
import { PUBLIC_PATH } from 'src/shared/constants';

export const staticConfig: ServeStaticModuleOptions = { rootPath: PUBLIC_PATH };
