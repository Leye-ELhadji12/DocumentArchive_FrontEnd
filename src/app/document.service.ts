import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private apiUrl = 'http://localhost:8081/documents';

  constructor(private http: HttpClient) { }


  uploadDocument(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<string>(`${this.apiUrl}/upload`, formData);
  }

  getDocument(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/view/${id}`, { responseType: 'blob' });
  }
}
