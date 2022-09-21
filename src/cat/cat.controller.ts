import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CatService } from './cat.service';
import { OperandDto } from './dto/add-sum.dto';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('api/machine')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post('create')
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }
  @Post('add')  
  add(@Body() addsum: OperandDto){
    return this.catService.add(addsum);
  }

  @Get('list')
  findAll() {
    return this.catService.findAll();
  }

  @Get('list/:id')
  findOne(@Param('id') id: string) {
    return this.catService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catService.remove(+id);
  }
}
