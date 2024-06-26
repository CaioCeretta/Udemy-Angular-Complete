import { Component, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  // providers: [
  //   LoggingService,
  // ]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor (private accountsService: AccountsService, private logginService: LoggingService){}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);

    // this.logginService.logStatusChange(status)
    this.accountsService.statusUpdated.emit(status)
  }
}
