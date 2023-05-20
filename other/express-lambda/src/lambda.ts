import { createServer, proxy } from 'aws-serverless-express';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { createApp } from './app';

const server = createServer(createApp(), undefined);

export default function(event: APIGatewayProxyEvent, context: Context) {
  console.log(`Event: ${JSON.stringify(event)}`);
  return proxy(server, event, context);
}
