import { s3, bucketName } from '../aws';

export default class S3Service {
  static async loadFile(fileName: string): Promise<any> {
    try {
      const data = await s3.getObject({ Bucket: bucketName, Key: fileName });
      return (await data.promise()).Body.toString('utf8');
    } catch (e) {
      throw `File load error: ${e.message}`;
    }
  }

  static async uploadFile(fileName: string, fileContent: Buffer): Promise<string> {
    try {
      const data = await s3.upload({ Bucket: bucketName, Key: fileName, Body: fileContent });
      const result = await data.promise();
      return result.Location;
    } catch (e) {
      throw `File upload error: ${e.message}`;
    }
  }
}
