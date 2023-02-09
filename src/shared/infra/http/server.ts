import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import swaggerUI from 'swagger-ui-express';

import '@shared/container';

import { appErrorHandler } from '@shared/infra/http/middlewares/appErrorHandler';
import { router } from '@shared/infra/http/routes';
import createConnection from '@shared/infra/typeorm';

import swaggerFile from '../../../swagger.json';

createConnection();
const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.use(appErrorHandler);

app.listen(3333, () => console.log('Server is running'));
