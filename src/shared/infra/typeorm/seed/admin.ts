import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import createConnection from '../index';

async function create() {
  const connection = await createConnection('localhost');

  const id = uuidV4();
  const password = await hash('admin', 8);

  const queryString = `INSERT INTO users(
      id, name, email, password, driver_license, "isAdmin", avatar, created_at
    )
    values(
      '${id}', 'Admin', 'admin@rentx.com.br' ,'${password}', 'XXXXXX', true, null, 'now()'
    )`;

  await connection.query(queryString);
  await connection.close();
}

create().then(() => console.log('User admin created!'));
