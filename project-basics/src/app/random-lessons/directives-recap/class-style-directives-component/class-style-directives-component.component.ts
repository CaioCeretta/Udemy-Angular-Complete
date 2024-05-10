import { Component } from '@angular/core';

@Component({
  selector: 'app-class-style-directives-component',
  templateUrl: './class-style-directives-component.component.html',
  styleUrls: ['./class-style-directives-component.component.css']
})
export class ClassStyleDirectivesComponentComponent {

  onlyOdd;
  numbers: number[] = [1, 2, 3, 4, 5, 6]
  oddNumbers: number[] = [1, 3, 5]
  evenNumbers: number[] = [2, 4, 6]
}
