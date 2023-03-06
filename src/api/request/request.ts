import { APIGatewayEvent } from 'aws-lambda';

export class Request {
  constructor(private readonly event: HasQueryStringParams) {}

  get parameters() {
    return {
      ...this.event.queryStringParameters,
    };
  }
}

type HasQueryStringParams = {
  queryStringParameters: APIGatewayEvent['queryStringParameters'];
};
