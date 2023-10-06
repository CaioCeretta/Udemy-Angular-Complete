import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit{
  @Input('srvElement') element: {type: string, name: string, content: string} = { type: 'server', name: 'test', content: 'cobtent  of test'};
  /*When we pass to a property, @Input() before it, it will say to the component, which calls this component, that it is
  avaiable to be binded to the element, and we can set an alias inside the braces*/

  constructor() {

  }

  ngOnInit() {

  }

}
