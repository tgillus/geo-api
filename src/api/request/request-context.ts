import { APIGatewayEvent, Context } from 'aws-lambda';

export class RequestContext {
  constructor(
    readonly functionName: string,
    readonly functionVersion: string,
    readonly sourceIp: string
  ) {}

  static from(
    {
      requestContext: {
        identity: { sourceIp },
      },
    }: APIGatewayEvent,
    { functionName, functionVersion }: Context
  ) {
    return new RequestContext(functionName, functionVersion, sourceIp);
  }
}
