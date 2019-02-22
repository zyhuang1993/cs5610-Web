import {Page} from '../models/page.model.client';
import {Injectable} from '@angular/core';

@Injectable()
export class PageService {
  pages: Page[] = [
    { pageId: '345', name: 'Post 1', websiteId: '123', description: 'Lorem' },
    { pageId: '456', name: 'Post 2', websiteId: '234', description: 'Lorem' },
    { pageId: '567', name: 'Post 3', websiteId: '345', description: 'Lorem' },
    { pageId: '678', name: 'Post 4', websiteId: '456', description: 'Lorem' },
    { pageId: '789', name: 'Post 5', websiteId: '567', description: 'Lorem' },
    { pageId: '890', name: 'Post 6', websiteId: '678', description: 'Lorem' },
    { pageId: '901', name: 'Post 6', websiteId: '789', description: 'Lorem' }
  ];

  constructor() {}

  api = {
    createPage: this.createPage,
    findPagesByWebsiteId: this.findPagesByWebsiteId,
    findPageById: this.findPageById,
    updatePage: this.updatePage,
    deletePage: this.deletePage
  };

  createPage(websiteId: string, page: Page) {
    page.pageId = this.randomID();
    this.pages.push(page);
  }

  findPagesByWebsiteId(websiteId) {
    return this.pages.filter((page) => {
      return page.websiteId === websiteId;
    });
  }

  findPageById(pageId) {
    return this.pages.find((page) => {
      return page.pageId === pageId;
    });
  }

  updatePage(pageId, page) {
    for (const i in this.pages) {
      if (this.pages[i].pageId === pageId) {
        this.pages[i].name = page.name;
        this.pages[i].description = page.description;
      }
    }
  }

  deletePage(pageId) {
    for (const i in this.pages) {
      if (this.pages[i].pageId === pageId) {
        const j = +i;
        this.pages.splice(j, 1);
        break;
      }
    }
  }
  private randomID(): string {
    const num = Math.floor(Math.random() * 1000) + 1;
    return num.toString();
  }
}
