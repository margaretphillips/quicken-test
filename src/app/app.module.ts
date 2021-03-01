import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/dashboard/user/user.component';
import { DetailComponent } from './components/dashboard/user/detail/detail.component';
import { ExpenseComponent } from './components/dashboard/user/expense/expense.component';
import { UserFundService } from './services/user-fund.service';
import { AddUserComponent } from './components/dashboard/user/forms/add-user/add-user.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    UserComponent,
    DetailComponent,
    ExpenseComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserFundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
