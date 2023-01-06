import 'dotenv/config';
import express from 'express';
import swaggerUI from 'swagger-ui-express';

import './database';
import './shared/container';

import { appErrorHandler } from './errors/appErrorHandler';
import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.use(appErrorHandler);

app.listen(3333, () => console.log('Server is running'));
