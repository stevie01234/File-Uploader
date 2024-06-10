import { Component, Input } from '@angular/core';
import { FileLocation } from '../file-location'; 

@Component({
  selector: 'app-file-location',
  standalone: true,
  imports: [],
  template: `
    <div class="listing">
      <img class="listing-logo" [src]="fileLocation.logo" alt="Exterior photo of {{fileLocation.name}}">
      <h2 class="listing-heading"> {{ fileLocation.name }} </h2>
      <p class="listing-size"> {{fileLocation.size }} </p>
      <p class="listing-type"> {{fileLocation.type }} </p>
    </div>
  `,
  styleUrl: './file-location.component.css'
})
export class FileLocationComponent {
  @Input() fileLocation!: FileLocation;
}
