import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('items')
export class ItemController {

  constructor(private itemsService: ItemService) { }

  @Get()
  allItems() {
    return this.itemsService.all();
  }

  @Post()
  createItem(@Body() item: any) {
    return this.itemsService.create(item);
  }

  @Put(':id')
  updateItem(@Param('id') id: any, @Body() item: any) {
    return this.itemsService.update(id, item);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: any) {
    return this.itemsService.delete(id);
  }
}
