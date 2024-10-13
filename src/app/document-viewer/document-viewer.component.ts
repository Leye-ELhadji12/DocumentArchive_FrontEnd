import { Component } from '@angular/core';
import { DocumentService } from '../document.service';
import { SafePipe } from "../safe.pipe";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-document-viewer',
    standalone: true,
    templateUrl: './document-viewer.component.html',
    styleUrls: ['./document-viewer.component.scss'],
    imports: [SafePipe, FormsModule, CommonModule]  // Ajout de CommonModule
})
export class DocumentViewerComponent {

  documentId: number | null = null;
  documentUrl: string | null = null;  // Changer undefined en null
  documentType: string | null = null;
  fileContent: string | null = null;  // Changer undefined en null

  constructor(private documentService: DocumentService) {}

  viewDocument() {
    if (this.documentId !== null) {
      this.documentService.getDocument(this.documentId).subscribe(blob => {
        this.documentType = blob.type;

        if (this.isTextFile(blob.type)) {
          this.readFileContent(blob);
        } else {
          const url = window.URL.createObjectURL(blob);
          this.documentUrl = url ?? '';  // Utiliser une chaîne vide si `url` est undefined
        }
      });
    }
  }

  private isTextFile(type: string): boolean {
    return ['text/plain', 'text/csv'].includes(type);
  }

  private readFileContent(blob: Blob): void {
    const reader = new FileReader();
    reader.onload = () => this.fileContent = reader.result as string;
    reader.readAsText(blob);
  }
}
