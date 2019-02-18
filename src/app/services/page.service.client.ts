import {Page} from '../models/page.model.client';
import {Injectable} from '@angular/core';

@Injectable()
export class PageService {
  pages: Page[] = [
    { pageId: '321', name: 'Post 1', websiteId: '456', description: 'Lorem' },
    { pageId: '432', name: 'Post 2', websiteId: '456', description: 'Lorem' },
    { pageId: '543', name: 'Post 3', websiteId: '456', description: 'Lorem' }
  ];

  constructor() {}

  api = {};

  createPage(websiteId: string, page: Page) {
    page.pageId = (new Date()).getTime() + '';
    this.pages.push(new Page(page.pageId, page.name, websiteId, page.description));
  }

  findPageByWebsiteId(websiteId) {
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
}
