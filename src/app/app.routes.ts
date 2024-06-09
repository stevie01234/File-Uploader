import { Routes } from '@angular/router';
import { FilesComponent } from './files/files.component';
import { UploadComponent } from './upload/upload.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: FilesComponent,
        title: 'Home Page'
    },
    {
        path: 'upload',
        component: UploadComponent,
        title: 'Upload File'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'File Details'
    }
];
