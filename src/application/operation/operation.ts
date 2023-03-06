import { EitherAsync } from 'purifree-ts';
import { Request } from '../../api/request/request.js';
import { Config } from '../../infrastructure/config/config.js';
import { Handler } from './handler/handler.js';
import { Schema } from './validation/schema.js';

export class Operation {
  constructor(
    private readonly schema: Schema,
    private readonly handler: Handler
  ) {}

  exec = ({ parameters }: Request) => {
    const result = this.schema.validate(parameters);

    return EitherAsync.liftEither(result).chain(this.handler.exec);
  };

  static from(config: Config) {
    return new Operation(new Schema(), Handler.from(config));
  }
}
