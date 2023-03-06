import { Operation } from '../application/operation/operation.js';
import { Probe } from '../application/probe/probe.js';
import { Config } from '../infrastructure/config/config.js';
import { Request } from './request/request.js';
import { Response } from './response/response.js';

export class Api {
  constructor(
    private readonly operation: Operation,
    private readonly response: Response,
    private readonly probe: Probe
  ) {}

  handler = async (request: Request) => {
    this.probe.requestReceived();

    return this.response.produce(await this.operation.exec(request));
  };

  static from(probe: Probe, config: Config) {
    return new Api(Operation.from(config), new Response(), probe);
  }
}
