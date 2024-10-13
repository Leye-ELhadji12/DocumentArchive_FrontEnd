import { Component } from '@angular/core';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-upload',
  standalone: true,
  imports: [],
  templateUrl: './document-upload.component.html',
  styleUrl: './document-upload.component.scss'
})
export class DocumentUploadComponent {
  
  selectedFile: File | null = null;
  message: string | null = null;

  constructor(private documentService: DocumentService) {}

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    if (this.selectedFile) {
      this.documentService.uploadDocument(this.selectedFile).subscribe(response => {
        this.message = response;
      }, error => {
        this.message = "Error uploading file";
      });
    }
  }
}
