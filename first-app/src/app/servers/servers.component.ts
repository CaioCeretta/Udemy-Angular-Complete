import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]' //Attribute syntax
  // selector: '.app-servers' //Class syntax, just like the regular selector,
  selector: 'app-servers', // Normal syntax
  // template: `<app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created'
  serverName = 'Test';
  serverCreated = false;


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)


  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName
  }

  onUpdateServerName(event: InputEvent) {
    this.serverName = (<HTMLInputElement>event.target).value
    // or (event.target as HTMLInputElement)
    /* or
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value
    */
  }

}
