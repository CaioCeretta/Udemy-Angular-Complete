import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AccountComponent } from './account/account.component';
import { AccountsService } from './accounts.service';
import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './assignment/fifth-assignment/active-users/active-users.component';
import { FaLoggingService } from './assignment/fifth-assignment/fa-logging.service';
import { FaUsersService } from './assignment/fifth-assignment/fa-users.service';
import { FifthAssignmentComponent } from './assignment/fifth-assignment/fifth-assignment.component';
import { InactiveUsersComponent } from './assignment/fifth-assignment/inactive-users/inactive-users.component';
import { LoggingService } from './login.service';
import { NewAccountComponent } from './new-account/new-account.component';
import { CounterService } from './assignment/fifth-assignment/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    FifthAssignmentComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountsService, LoggingService, FaUsersService, FaLoggingService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
