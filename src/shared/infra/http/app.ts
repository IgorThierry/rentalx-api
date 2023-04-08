import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import swaggerUI from 'swagger-ui-express';

import '@shared/container';

import { appErrorHandler } from '@shared/infra/http/middlewares/appErrorHandler';
import { router } from '@shared/infra/http/routes';

import swaggerFile from '../../../swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.use(appErrorHandler);

export { app };
