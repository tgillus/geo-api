import { Either } from 'purifree-ts';
import { GeoLocationResponse } from '../../infrastructure/geo/geo-gateway.js';

export class Response {
  produce = (result: Either<Error, GeoLocationResponse>) =>
    result.caseOf({
      Left: (error) => ({
        statusCode: 500,
        body: JSON.stringify(error),
      }),
      Right: (location) => ({
        statusCode: 200,
        body: JSON.stringify(location),
      }),
    });
}
