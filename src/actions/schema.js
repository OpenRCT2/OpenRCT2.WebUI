import { arrayOf, schema } from 'normalizr';

export const server = schema.Entity('servers');
export const arrayOfServers = arrayOf(server);
