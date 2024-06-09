import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FilesComponent } from './files/files.component';
import { UploadComponent } from './upload/upload.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    FilesComponent,
    UploadComponent
  ],
  template: `
    <div class="main">
      <div class="nav-bar">
        <div class="brand">
          <img class="brand-logo" src="/assets/logo.svg.png" alt="logo" aria-hidden="true">
          <div class="brand-names">
            <span class="brand-name"> File </span>
            <span class="brand-name"> Uploader </span>
          </div>
        </div>

        <a class="nav-bar-links" [routerLink]="['/']"> Files </a>
        <a class="nav-bar-links" [routerLink]="['/upload']"> Upload </a>

        <!-- Maybe add one more link for user account -->
      </div>

      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'File Uploader';
}
