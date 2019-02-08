import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemService {
  items = [
    { id: 1, name: 'Item 1', description: 'This a item description' },
    { id: 2, name: 'Item 2', description: 'This a description!' },
    { id: 3, name: 'Item 3', description: 'This is a lovely item' },
  ];

  // tslint:disable-next-line:no-empty
  constructor() { }

  all() {
    return this.items;
  }

  create(item: any) {
    return [...this.items, item];
  }

  update(itemId: any, item: any) {
    return this.items.map(itemRes => {
      return itemRes.id === itemId.id ? Object.assign({}, item) : itemRes;
    });
  }

  delete(itemId: any) {
    return this.items.filter(item => item.id.toString() !== itemId.id);
  }
}
