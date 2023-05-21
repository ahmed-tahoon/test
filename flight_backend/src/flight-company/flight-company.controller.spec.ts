import { Test, TestingModule } from '@nestjs/testing';
import { FlightCompanyController } from './flight-company.controller';
import { FlightCompanyService } from './flight-company.service';

describe('FlightCompanyController', () => {
  let controller: FlightCompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlightCompanyController],
      providers: [FlightCompanyService],
    }).compile();

    controller = module.get<FlightCompanyController>(FlightCompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
