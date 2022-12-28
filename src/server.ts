import 'dotenv/config';
import express from 'express';

import { appErrorHandler } from './errors/appErrorHandler';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.use(appErrorHandler);

app.listen(3333, () => console.log('Server is running'));
