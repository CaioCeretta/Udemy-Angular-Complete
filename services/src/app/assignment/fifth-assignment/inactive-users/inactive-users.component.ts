import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { FaUsersService } from '../fa-users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private faUsersService: FaUsersService) {}

  ngOnInit() {
    this.users = this.faUsersService.inactiveUsers
  }

  onSetToActive(id: number) {
    this.faUsersService.onSetToActive(id)

  }
}
