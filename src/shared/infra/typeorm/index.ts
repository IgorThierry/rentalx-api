import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (host = 'database'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  const newOptions = Object.assign(defaultOptions, { host });
  return createConnection(newOptions);
};
