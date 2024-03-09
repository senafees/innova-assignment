import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { BodyComponent } from './view/layout/body/body.component';
import { HeaderComponent } from './view/layout/header/header.component';
import { LeftMenuComponent } from './view/layout/left-menu/left-menu.component';
import { SidebarComponent } from './view/layout/sidebar/sidebar.component';
import { LoadingComponent } from './view/shared/loading/loading.component';
import { PageInfoBarComponent } from './view/shared/page-info-bar/page-info-bar.component';
import { BlogListComponent } from './view/blog/blog-list/blog-list.component';
import { MaterialThemeModule } from './material/material/material.module';
import { DashboardService } from './services/dashboard.service';

import { MatTableModule } from '@angular/material/table';
import { UserListComponent } from './view/user/user-list/user-list.component';
import { BlogService } from './services/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BodyComponent,
    HeaderComponent,
    LeftMenuComponent,
    SidebarComponent,
    LoadingComponent,
    PageInfoBarComponent,
    BlogListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialThemeModule,
    MatTableModule
  ],
  providers: [DashboardService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
