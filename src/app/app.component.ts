import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocumentUploadComponent } from "./document-upload/document-upload.component";
import { DocumentViewerComponent } from './document-viewer/document-viewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DocumentUploadComponent, DocumentViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sae';
}
