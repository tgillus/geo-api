import { EitherAsync } from 'purifree-ts';
import { Http } from '../../vendor/http/http.js';
import { Config } from '../config/config.js';

export class GeoGateway {
  constructor(
    private readonly http: Http,
    private readonly api: string,
    private readonly key: string,
    private readonly country: string
  ) {}

  locationByZip = (zip: string) =>
    EitherAsync<Error, GeoLocationResponse>(() =>
      this.http.get<GeoLocationResponse>(`${this.api}/v1/search/autocomplete`, {
        headers: {
          Authorization: this.key,
        },
        searchParams: {
          query: zip,
          country: this.country,
        },
      })
    );

  static from({ geo: { api, country, key } }: Config) {
    return new GeoGateway(new Http(), api, key, country);
  }
}

export interface GeoLocationResponse {
  readonly addresses: Address[];
}

interface Address {
  formattedAddress: string;
  latitude: number;
  longtitude: number;
}
