import { Test, TestingModule } from '@nestjs/testing';
import { DapartureAirportService } from './daparture-airport.service';

describe('DapartureAirportService', () => {
  let service: DapartureAirportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DapartureAirportService],
    }).compile();

    service = module.get<DapartureAirportService>(DapartureAirportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
