import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: any[] = [];

  onAddServer() {
    this.servers.push('Another Server' + new Date());
  }

  onRemoveServer(id: number) {
    const position = id + 1;
    this.servers.splice(position, 1)
  }
}
