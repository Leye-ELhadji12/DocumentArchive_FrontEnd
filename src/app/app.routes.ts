import { Routes } from '@angular/router';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { DocumentViewerComponent } from './document-viewer/document-viewer.component';

export const routes: Routes = [
    // {path: 'upload', component: DocumentUploadComponent},
    {path: 'view', component: DocumentViewerComponent},
    {path: '', redirectTo: 'view', pathMatch: 'full'}
];
