import { env } from '../env/env.js';

interface GeoServiceProps {
  readonly api: string;
  readonly country: string;
  readonly key: string;
}

type Env = typeof env;

export class Config {
  readonly geo: GeoServiceProps;

  constructor(env: Env) {
    this.geo = {
      api: env.RADAR_API_HOST,
      country: env.RADAR_API_COUNTRY,
      key: env.RADAR_API_KEY,
    };
  }
}
