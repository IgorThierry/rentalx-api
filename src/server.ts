import express from 'express';

import { appErrorHandler } from './errors/appErrorHandler';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationRoutes } from './routes/specifications.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationRoutes);

app.use(appErrorHandler);

app.listen(3333, () => console.log('Server is running'));
