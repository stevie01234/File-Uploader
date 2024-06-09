import { Component } from '@angular/core';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [],
  template: `
    <div>
      <form>
        <input #search type="text" placeholder="search files" (keyup.enter)="filterResults(search.value)">
        <button class="btn" type="button" (click)="filterResults(search.value)">
          Search
        </button>
      </form>

      <div class="results">
        <!-- TODO -->
      </div>
    </div>
`,
  styleUrl: './files.component.css'
})
export class FilesComponent {
  filterResults(text: string){
    // TODO
  }
}
