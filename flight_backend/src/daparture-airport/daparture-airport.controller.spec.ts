import { Test, TestingModule } from '@nestjs/testing';
import { DapartureAirportController } from './daparture-airport.controller';
import { DapartureAirportService } from './daparture-airport.service';

describe('DapartureAirportController', () => {
  let controller: DapartureAirportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DapartureAirportController],
      providers: [DapartureAirportService],
    }).compile();

    controller = module.get<DapartureAirportController>(DapartureAirportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
