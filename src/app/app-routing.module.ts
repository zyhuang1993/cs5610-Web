import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
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
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'user/:uid', component: ProfileComponent},
  { path: 'user/:uid/website', component: WebsiteListComponent},
  { path: 'user/:uid/website/new', component: WebsiteNewComponent},
  { path: 'user/:uid/website/:wid', component: WebsiteEditComponent},
  { path: 'user/:uid/website/:wid/page', component: PageListComponent},
  { path: 'user/:uid/website/:wid/page/new', component: PageNewComponent},
  { path: 'user/:uid/website/:wid/page/:pid', component: PageEditComponent},
  { path: 'user/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent},
  { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent},
  { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
