import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FlightCompanyService } from './flight-company.service';
import { CreateFlightCompanyDto } from './dto/create-flight-company.dto';
import { UpdateFlightCompanyDto } from './dto/update-flight-company.dto';
import { FlightService } from 'src/flight/flight.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('flight-company')
export class FlightCompanyController {
  constructor(private readonly flightCompanyService: FlightCompanyService) {}

  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'logo', maxCount: 1 }], {
      // fileFilter: FileFilter,
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  @Post()
  async create(
    @Body() createFlightCompanyDto: CreateFlightCompanyDto,
    @UploadedFiles()
    files: {
      logo?: Express.Multer.File[];
    },
  ) {
    return this.flightCompanyService.create({
      ...createFlightCompanyDto,
      logo: files?.logo?.[0]?.filename,
    });
  }

  @Get()
  findAll() {
    return this.flightCompanyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flightCompanyService.findOne(+id);
  }
  @Get(':id/flights')
  findAllFlights(@Param('id') id: string) {
    return this.flightCompanyService.findAllFlights(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFlightCompanyDto: UpdateFlightCompanyDto,
  ) {
    return this.flightCompanyService.update(+id, updateFlightCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flightCompanyService.remove(+id);
  }
}
