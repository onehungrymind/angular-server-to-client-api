import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { WidgetService } from './widget.service';

@Controller('widgetss')
export class WidgetController {

  constructor(private widgetsService: WidgetService) { }

  @Get()
  allWidgets() {
    return this.widgetsService.all();
  }

  @Post()
  createWidget(@Body() widget: any) {
    return this.widgetsService.create(widget);
  }

  @Put(':id')
  updateWidget(@Param('id') id: any, @Body() widget: any) {
    return this.widgetsService.update(id, widget);
  }

  @Delete(':id')
  deleteWidget(@Param('id') id: any) {
    return this.widgetsService.delete(id);
  }
}
