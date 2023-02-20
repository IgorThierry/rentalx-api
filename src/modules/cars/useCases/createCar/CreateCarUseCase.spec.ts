import { InMemoryCarsRepository } from '@modules/cars/repositories/in-memory/InMemoryCarsRepository';
import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepository: InMemoryCarsRepository;

describe('Create Car', () => {
  beforeEach(() => {
    carsRepository = new InMemoryCarsRepository();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it('Should be able to create a new car', async () => {
    const carData = {
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'fake-brand',
      category_id: 'fake-category-id',
    };

    const car = await createCarUseCase.execute(carData);
    expect(car).toHaveProperty('id');
    expect(car).toHaveProperty('created_at');
  });

  it('Should not be able to create a car with exists license plate', async () => {
    expect(async () => {
      const carData = {
        name: 'Car 1',
        description: 'Description Car',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'fake-brand',
        category_id: 'fake-category-id',
      };

      await createCarUseCase.execute(carData);
      await createCarUseCase.execute({ ...carData, name: 'Car 2' });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should be able to create a car with available true by default', async () => {
    const carData = {
      name: 'Car Available',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'fake-brand',
      category_id: 'fake-category-id',
    };

    const createdCar = await createCarUseCase.execute(carData);

    expect(createdCar.available).toBe(true);
  });
});
