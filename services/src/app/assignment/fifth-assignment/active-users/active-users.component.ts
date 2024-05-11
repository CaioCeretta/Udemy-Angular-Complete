import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { FaUsersService } from '../fa-users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[] = []

  constructor(private faUserService: FaUsersService){}

  ngOnInit() {
    this.users = this.faUserService.activeUsers
  }

  onSetToInactive(id: number) {
    this.faUserService.onSetToInactive(id)
  }
}
