import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { WidgetModule } from './widget/widget.module';

@Module({
  imports: [ItemModule, WidgetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
