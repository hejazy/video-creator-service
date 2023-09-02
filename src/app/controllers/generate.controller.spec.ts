import {Test} from '@nestjs/testing';
import {GenerateController} from './';
import {GenerateService} from '../services';
const mockService = () => ({
  filter: jest.fn(),
  findById: jest.fn(),
});

describe('Generate Controller', () => {
  let controller;
  let service;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [GenerateController],
      providers: [
        {provide: GenerateService, useFactory: mockService},
      ],
    }).compile();

    controller = module.get<GenerateController>(GenerateController);
    service = module.get<GenerateService>(GenerateService);
  });

  it('filter Generates', async () => {
    jest.spyOn(service, 'getVideo').mockResolvedValue('mock-response');
    expect(await controller.query('getVideo')).toBe('mock-response');
  });
});
