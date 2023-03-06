import { Config } from '../../../infrastructure/config/config.js';
import { GeoGateway } from '../../../infrastructure/geo/geo-gateway.js';

export class Handler {
  constructor(private readonly geoGateway: GeoGateway) {}

  exec = ({ zip }: { zip: string }) => {
    return this.geoGateway.locationByZip(zip);
  };

  static from(config: Config) {
    return new Handler(GeoGateway.from(config));
  }
}
