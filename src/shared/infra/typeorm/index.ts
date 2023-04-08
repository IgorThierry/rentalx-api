import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (host = 'database'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  const database =
    String(process.env.NODE_ENV) === 'test'
      ? 'rentx_test'
      : defaultOptions.database;

  const newOptions = Object.assign(defaultOptions, {
    database,
    host,
  });

  return createConnection(newOptions);
};
