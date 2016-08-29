import { Schema, arrayOf } from 'normalizr';

export const server = new Schema('servers');
export const arrayOfServers = arrayOf(server);
