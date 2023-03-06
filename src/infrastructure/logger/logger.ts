import log from 'lambda-log';
import { RequestContext } from '../../api/request/request-context.js';

export class Logger {
  constructor(private readonly log: log.LambdaLog) {}

  info(message: string, meta?: Record<string, string | undefined>) {
    this.log.info(message, meta);
  }

  error(error: Error, meta?: Record<string, string | undefined>) {
    this.log.error(error, meta);
  }

  static from(context: RequestContext) {
    return new Logger(new log.LambdaLog({ meta: { ...context } }));
  }
}
