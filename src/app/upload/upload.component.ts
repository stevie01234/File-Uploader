import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [],
  template: `
    <input type="file" class="file-input" (change)="onFileSelected($event)" #fileUpload>
    <button class="upload-btn" (click)="uploadFile()"> Upload </button>

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
  file!: File;

  onFileSelected(event: any) {
    const uploadFile: File = event.target.files[0];

    if(uploadFile) {
      this.file = uploadFile;
      //const formData = new FormData();
      //formData.append("thumbnail", uploadFile);
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
