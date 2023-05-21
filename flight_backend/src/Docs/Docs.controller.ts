import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseGuards,
  UploadedFiles,
  Req,
  BadRequestException,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { DocsService } from './Docs.service';
import { CreateDocsDto } from './dto/create-Docs.dto';
import { UpdateDocsDto } from './dto/update-Docs.dto';
import { CurrentUserInterceptor } from 'src/users/interceptors/current-user.interceptor';
import { AuthGuard } from 'src/guards/auth.guard';
import {
  FileFieldsInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileFilter } from 'src/utils/file-validator';
import { extname } from 'path';
import { DocsDto } from './dto/Docs.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UsersService } from 'src/users/users.service';
@Controller('docs')
// @UseInterceptors(CurrentUserInterceptor)
// @UseGuards(AuthGuard)
@Serialize(DocsDto)
export class DocsController {
  constructor(
    private readonly DocsService: DocsService,
    private readonly usersService: UsersService,
  ) {}

  // @Post()
  // create(@Body() createDocsDto: CreateDocsDto) {
  //   return this.DocsService.create(createDocsDto);
  // }

  @Get()
  findAll(@Query('ClientId') ClientId: number) {
    return this.DocsService.findAll(ClientId);
  }
  @Post('create')
  // @UseInterceptors(
  //   FileFieldsInterceptor([{ name: 'doc', maxCount: 1 }], {
  //     fileFilter: FileFilter,
  //     storage: diskStorage({
  //       destination: './uploads',
  //       filename: (req, file, callback) => {
  //         const uniqueSuffix =
  //           Date.now() + '-' + Math.round(Math.random() * 1e9);
  //         const ext = extname(file.originalname);
  //         const filename = `${uniqueSuffix}${ext}`;
  //         callback(null, filename);
  //       },
  //     }),
  //   }),
  // )
  async uploadFile(
    @Body() body: CreateDocsDto,

    @Req() req: any,
  ) {
    // const isEmpty = Object.keys(files).length === 0;
    // if (isEmpty || !files || req.fileValidationError) {
    //   throw new BadRequestException(req.fileValidationError);
    // }

    const User = await this.usersService.findOne(+body.user);

    const product = await this.DocsService.create(
      {
        ...body,
      },
      User,
    );

    throw new HttpException('CREATED', HttpStatus.CREATED);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.DocsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocsDto: UpdateDocsDto) {
    return this.DocsService.update(+id, updateDocsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.DocsService.remove(+id);
  }
}
