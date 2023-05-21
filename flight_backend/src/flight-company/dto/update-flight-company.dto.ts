import { PartialType } from '@nestjs/swagger';
import { CreateFlightCompanyDto } from './create-flight-company.dto';

export class UpdateFlightCompanyDto extends PartialType(CreateFlightCompanyDto) {}
