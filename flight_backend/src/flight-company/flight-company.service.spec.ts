import { Test, TestingModule } from '@nestjs/testing';
import { FlightCompanyService } from './flight-company.service';

describe('FlightCompanyService', () => {
  let service: FlightCompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlightCompanyService],
    }).compile();

    service = module.get<FlightCompanyService>(FlightCompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
