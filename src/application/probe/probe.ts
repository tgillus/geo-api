import { RequestContext } from '../../api/request/request-context.js';
import { Logger } from '../../infrastructure/logger/logger.js';

export class Probe {
  constructor(private readonly logger: Logger) {}

  requestReceived() {
    this.logger.info('request received');
  }

  static from(context: RequestContext) {
    return new Probe(Logger.from(context));
  }
}
