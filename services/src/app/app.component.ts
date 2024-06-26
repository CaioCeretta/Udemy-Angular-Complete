import { Component } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  accounts: {name: string, status: string}[] = []

  constructor(private accountServices: AccountsService) {}

  /* Reminder, every initialization must be done on the ngOnInit life cycle method, not on the constructor */

  ngOnInit() {
    this.accounts = this.accountServices.accounts;
  }

}
