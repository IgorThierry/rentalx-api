import { AppError } from '@shared/errors/AppError';
import { InMemoryCategoriesRepository } from '@shared/infra/modules/cars/repositories/in-memory/InMemoryCategoriesRepository';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let inMemoryCategoriesRepository: InMemoryCategoriesRepository;

describe('Create Category', () => {
  beforeAll(() => {
    inMemoryCategoriesRepository = new InMemoryCategoriesRepository();
    createCategoryUseCase = new CreateCategoryUseCase(
      inMemoryCategoriesRepository,
    );
  });

  it('Should be able to create a new category', async () => {
    const category = {
      name: 'Category Test',
      description: 'Category description Test',
    };

    await createCategoryUseCase.execute(category);

    const categoryCreated = await inMemoryCategoriesRepository.findByName(
      category.name,
    );

    expect(categoryCreated).toHaveProperty('id');
    expect(categoryCreated).toHaveProperty('created_at');
    expect(categoryCreated.name).toBe(category.name);
    expect(categoryCreated.description).toBe(category.description);
  });

  it('Should not be able to create a new category with an existing name', async () => {
    await expect(async () => {
      const category = {
        name: 'Category Test',
        description: 'Category description Test',
      };

      await createCategoryUseCase.execute(category);

      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
