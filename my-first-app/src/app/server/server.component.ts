import { Component } from "@angular/core";

//Decorators are always declared by using an @ at the start of it
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // template: `<p>Server with ID {{serverId}} is {{serverStatus}} </p>`,
  // styleUrls: ['./server.component.css']
  styles: [`
    .online {
      color: white
    }
  `]
})

export class ServerComponent {
  serverId = 10;
  serverStatus: string = 'offline'
  serverCreated = false;

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    switch(this.serverStatus) {
      case 'offline':
        return 'red';
      case 'online':
        return 'green'
    }
  }
}
