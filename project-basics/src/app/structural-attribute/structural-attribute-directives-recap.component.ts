import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-attribute-directives-recap',
  templateUrl: './directives-recap.component.html',
  styleUrls: ['./directives-recap.component.css']
})
export class StructuralAttributeDirectivesComponent {

  onlyOdd;
  numbers: number[] = [1, 2, 3, 4, 5, 6]
  oddNumbers: number[] = [1, 3, 5]
  evenNumbers: number[] = [2, 4, 6]


}
