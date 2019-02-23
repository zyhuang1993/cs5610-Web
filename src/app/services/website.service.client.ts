import {Website} from '../models/website.model.client';
import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';

@Injectable()
export class WebsiteService {
  websites: Website[] = [
    { websiteId: '123', name: 'Facebook', developerId: '456', description: 'Lorem' },
    { websiteId: '234', name: 'Tweeter', developerId: '456', description: 'Lorem' },
    { websiteId: '456', name: 'Gizmodo', developerId: '234', description: 'Lorem' },
    { websiteId: '890', name: 'Go', developerId: '123', description: 'Lorem' },
    { websiteId: '567', name: 'Tic Tac Toe', developerId: '345', description: 'Lorem' },
    { websiteId: '678', name: 'Checkers', developerId: '123', description: 'Lorem' },
    { websiteId: '789', name: 'Chess', developerId: '234', description: 'Lorem' }
  ];

  constructor() {}

  api = {
    createWebsite: this.createWebsite,
    findWebsiteByUser: this.findWebsitesByUser,
    findWebsiteById: this.findWebsiteById,
    updateWebsite: this.updateWebsite,
    deleteWebsite: this.deleteWebsite
  };

  createWebsite(userId, website) {
    website.websiteId = this.randomID();
    website.developerId = userId;
    this.websites.push(website);
  }

  findWebsitesByUser(userId: string) {
    return this.websites.filter((website) => {
      return website.developerId === userId;
    });
  }

  findWebsiteById(websiteId) {
    return this.websites.find((website) => {
      return website.websiteId === websiteId;
    });
  }

  updateWebsite(websiteId, website) {
    for (const i in this.websites) {
      if (this.websites[i].websiteId === websiteId) {
        this.websites[i].name = website.name;
        this.websites[i].description = website.description;
      }
    }
  }

  deleteWebsite(websiteId) {
    for (const i in this.websites) {
      if (this.websites[i].websiteId === websiteId) {
        const j = +i;
        this.websites.splice(j, 1);
        break;
      }
    }
  }

  private randomID(): string {
    const num = Math.floor(Math.random() * 1000) + 1;
    return num.toString();
  }


}
