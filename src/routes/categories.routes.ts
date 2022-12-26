import { Request, Response, Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request: Request, response: Response) =>
  createCategoryController.handle(request, response),
);

categoriesRoutes.get('/', (request: Request, response: Response) =>
  listCategoriesController.handle(request, response),
);

export { categoriesRoutes };
