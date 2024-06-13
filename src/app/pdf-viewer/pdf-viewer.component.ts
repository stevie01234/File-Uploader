import { Component, OnInit, Input, inject } from '@angular/core';
import { FileService } from '../file.service';
import { FileLocation } from '../file-location';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [
  ],
  template: `
    <p>pdf-viewer works!</p>

    <div class="pdf-viewer">
      <object [data]="file" type="application/pdf"></object>
      <div class="pdf-viewer-controls">
        <button class="btn" (click)="goToPreviousPage()"> Previous </button>
        <span>{{ currentPage }} / {{ totalPages }}</span>
        <button class="btn" (click)="goToNextPage()"> Next </button>
      </div>
    </div>
  `,
  styleUrl: './pdf-viewer.component.css'
})
export class PdfViewerComponent {
   //fileName!: string;
   @Input() file!: File;
  fileService: FileService = inject(FileService);
  currentPage: number = 1;
  totalPages: number = 1;

  constructor() {  }

  /*
  async ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.pdfData = await this.fileService.getFile()
    this.totalPages = this.getTotalPges();
    // TODO
    // logic to set toTalPages
  }
  */

  // Useful ?
  getTotalPges(): number {
    // TODO
    return 1;
  }

  goToPreviousPage() {
    // TODO
    if(this.currentPage > 1) {
      this.currentPage -= 1;
    }
  }

  goToNextPage() {
    // TODO
    if(this.currentPage < this.totalPages) {
      this.currentPage += 1;
    }
  }
}
