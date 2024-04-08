import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   // styleUrls: ['./app.component.css']

//   styles: [`
//     h2 {
//       color: dodgerblue;
//       font-weight: bold;
//     }
//   `]
// })
// export class AppComponent {

// }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  servers: string[] = [];

  onAddServer() {
    this.servers.push('Another server')
  }

  onRemoveServer(id: number) {
    const position = id + 1
    this.servers.splice(position, 1)
  }


}
