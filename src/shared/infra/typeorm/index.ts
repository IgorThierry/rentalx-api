import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  const database =
    process.env.NODE_ENV === 'test' ? 'rentx_test' : defaultOptions.database;

  const newOptions = Object.assign(defaultOptions, { database });

  return createConnection(newOptions);
};
