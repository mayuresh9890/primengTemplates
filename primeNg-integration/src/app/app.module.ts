import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { from } from 'rxjs';
import { SubjectListComponent } from './subject-list/subject-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SubjectListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    PaginatorModule,
    BreadcrumbModule,
    MenubarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
