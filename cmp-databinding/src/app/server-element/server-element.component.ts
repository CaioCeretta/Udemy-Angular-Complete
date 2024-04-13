
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})

export class ServerElementComponent {
  @Input('srvElement') element: {
  type: string
  name: string
  content: string
};

@Input() name;
@ViewChild('heading', { static: true }) header: ElementRef



}



