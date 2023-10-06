import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput!: ElementRef;
  newBlueprintName = '';
  newBlueprintContent = '';


  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value)
    // console.log(this.serverContentInput)

    // this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    this.serverCreated.emit({
      serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({blueprintName: nameInput.value, blueprintContent: this.newBlueprintContent});
  }

}
