import { Component, inject } from '@angular/core';
import { FileLocationComponent } from '../file-location/file-location.component';
import { FileLocation } from '../file-location'; 
import { FileService } from '../file.service';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [
    FileLocationComponent
  ],
  template: `
    <div>
      <form>
        <input #search type="text" placeholder="search files" (keyup.enter)="filterResults(search.value)">
        <button class="btn" type="button" (click)="filterResults(search.value)">
          Search
        </button>
      </form>

      <button class="btn" type="button" (click)="printList()">
          List
        </button>
      

      <div class="results">
        <app-file-location [fileLocation]="fileLocation"></app-file-location>
      </div>
    </div>
`,
  styleUrl: './files.component.css'
})
export class FilesComponent {
  fileList: FileLocation[] = [];
  fileService: FileService = inject(FileService);

  constructor() {
    this
  }

  fileLocation: FileLocation = {
    name: "Test File",
    size: 75,
    type: 'pdf',
    logo: "../../assets/file-logo.png"
  };

  filterResults(text: string){
    
  }

  printList() {
    this.fileService.getAllFiles()
  }
}
