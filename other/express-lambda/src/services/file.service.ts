// import { Data } from '../shared/models';
// import { writeFile, readFile } from 'fs/promises';
// import { FILE_PATH } from '../shared/constants';
//
// export default class FileService {
//   static async readFile(): Promise<Data> {
//     try {
//       return JSON.parse((await readFile(FILE_PATH)).toString());
//     } catch (e) {
//       throw `File read error: ${e.message}`;
//     }
//   }
//
//   static async writeFile(data: Data): Promise<void> {
//     try {
//       await writeFile(FILE_PATH, JSON.stringify(data), { flag: 'w+' });
//     } catch (e) {
//       throw `File write error: ${e.message}`;
//     }
//   }
// }
