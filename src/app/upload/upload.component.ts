import { Component, inject } from '@angular/core';
import { FileService } from '../file.service';
import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    PdfViewerComponent
  ],
  template: `
    <input type="file" class="file-input" (change)="onFileSelected($event)" #fileUpload>
    <button class="upload-btn" (click)="uploadFile()"> Upload </button>

    
    <app-pdf-viewer [file]="file"></app-pdf-viewer>
    
    <!---
    

    <div class="file-upload">
      {{ fileName || "No file uploaded yet." }}

      <button class="upload-btn" (click)="fileUpload.click()">
        Upload
      </button>
    </div>
-->
  `,
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  fileService: FileService = inject(FileService);
  file!: File;

  onFileSelected(event: any) {
    const uploadFile: File = event.target.files[0];

    if(uploadFile) {
      this.file = uploadFile;
      //this.fileService.setFile(this.file);
      //const formData = new FormData();
      //formData.append("thumbnail", uploadFile);
      // const reader = new FileReader();
      console.log(this.file);
    }
  }

  uploadFile() {
    if(!this.file) {
      return;
    }

    const link = document.createElement('a');
    link.href = URL.createObjectURL(this.file);
    link.download = this.file.name;
    link.click();
    link.remove();
  }
}
