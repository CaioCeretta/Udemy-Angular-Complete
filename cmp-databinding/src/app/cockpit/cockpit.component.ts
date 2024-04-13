import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  //The parentheses are for calling the constructor of the EventEmitter
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>()

  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

  constructor() {}

  ngOnInit() {

  }


  onAddServer(nameInput: HTMLInputElement) {

    // this.serverContentInput.nativeElement.value = 'Something else'


    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }


  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    })
  }
}
