// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-cockpit',
//   templateUrl: './cockpit.component.html',
//   styleUrl: './cockpit.component.css'
// })
// export class CockpitComponent {

//   @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>()
//   //The parentheses are for calling the constructor of the EventEmitter
//   @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>()

//   // newServerName = '';
//   newServerContent = '';

//   onAddServer(nameInput: HTMLInputElement) {
//     console.log()

//     this.serverCreated.emit({
//       serverName: nameInput.value,
//       serverContent: this.newServerContent
//     });

//   }


//   onAddBlueprint(nameInput: HTMLInputElement) {
//     this.blueprintCreated.emit({
//       blueprintName: nameInput.value,
//       blueprintContent: this.newServerContent
//     })
//   }
// }
