import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    MenubarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
