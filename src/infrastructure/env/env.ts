import { envsafe, str, url } from 'envsafe';

export const env = envsafe({
  RADAR_API_COUNTRY: str({
    default: 'US',
    choices: ['US'],
  }),
  RADAR_API_HOST: url({
    default: 'https://api.radar.io',
  }),
  RADAR_API_KEY: str(),
});
