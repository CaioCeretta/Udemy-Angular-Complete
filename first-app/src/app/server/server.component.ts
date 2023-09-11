import { Component } from "@angular/core";

@Component({
  selector: 'app-server', //Name that will be used on other components to call it, it must be unique
  templateUrl: './server.component.html', //File that will hold the html for the component. Relative path


})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  getServerStatus() {
    return this.serverStatus
  }
}
