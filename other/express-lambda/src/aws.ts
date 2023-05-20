import aws, { S3 } from 'aws-sdk';
import { config } from 'dotenv';

config();

aws.config.update({
  accessKeyId: process.env.ID,
  secretAccessKey: process.env.SECRET,
});

export const s3 = new S3();

export const bucketName: string = process.env.BUCKET_NAME;
