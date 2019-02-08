import { Injectable } from '@nestjs/common';

@Injectable()
export class WidgetService {
  widgets = [
    { id: 1, name: 'Widget 1', description: 'This a widget description' },
    { id: 2, name: 'Widget 2', description: 'This a description!' },
    { id: 3, name: 'Widget 3', description: 'This is a lovely widget' },
  ];

  // tslint:disable-next-line:no-empty
  constructor() { }

  all() {
    return this.widgets;
  }

  create(widget: any) {
    return [...this.widgets, widget];
  }

  update(widgetId: any, widget: any) {
    return this.widgets.map(widgetRes => {
      return widgetRes.id === widgetId.id ? Object.assign({}, widget) : widgetRes;
    });
  }

  delete(widgetId: any) {
    return this.widgets.filter(widget => widget.id.toString() !== widgetId.id);
  }
}
