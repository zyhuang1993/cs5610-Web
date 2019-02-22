import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {LoginComponent} from './views/user/login/login.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {RegisterComponent} from './views/user/register/register.component';
import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
import {WebsiteListComponent} from './views/website/website-list/website-list.component';
import {WebsiteEditComponent} from './views/website/website-edit/website-edit.component';
import {PageNewComponent} from './views/page/page-new/page-new.component';
import {PageListComponent} from './views/page/page-list/page-list.component';
import {PageEditComponent} from './views/page/page-edit/page-edit.component';
import {WidgetListComponent} from './views/widget/widget-list/widget-list.component';
import {WidgetChooserComponent} from './views/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './views/widget/widget-edit/widget-edit.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'user/:userId', component: ProfileComponent},
  { path: 'user/:userId/website', component: WebsiteListComponent},
  { path: 'user/:userId/website/new', component: WebsiteNewComponent},
  { path: 'user/:userId/website/:websiteId', component: WebsiteEditComponent},
  { path: 'user/:userId/website/:websiteId/page', component: PageListComponent},
  { path: 'user/:userId/website/:websiteId/page/new', component: PageNewComponent},
  { path: 'user/:userId/website/:websiteId/page/:pageId', component: PageEditComponent},
  { path: 'user/:userId/website/:websiteId/page/:pageId/widget', component: WidgetListComponent},
  { path: 'user/:userId/website/:websiteId/page/:pageId/widget/new', component: WidgetChooserComponent},
  { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:wigdetId', component: WidgetEditComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
