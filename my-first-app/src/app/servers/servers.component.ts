import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]'
  // selector: '.app-servers'

  // These are the three ways of declaring a component selector, even though the first one is still the better one

  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created'
  serverName = ''
  serverCreated = false;
  servers = [
    'Tests Server',
    'Tests Server2'

  ]


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName
  }

}
