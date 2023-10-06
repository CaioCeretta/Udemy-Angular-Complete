import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  serverElements: {type: string, name: string, content: string}[] = [{type: 'server', 'name': 'test server', content: 'content of test server'}];
  blueprintElements: {type: string, name: string, content: string}[] = [{type: 'server', 'name': 'test server', content: 'content of test server'}];


  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
    this.blueprintElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    })
  }

}
