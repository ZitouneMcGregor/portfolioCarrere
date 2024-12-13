import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  constructor(private http: HttpClient) {}

  downloadCV(): void {
    this.http.get('./assets/cv.pdf', { responseType: 'blob' }).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Olivier_Carrere_Gee_CV.pdf';
      link.click();
      window.URL.revokeObjectURL(url); // Libère la mémoire
    });
  }
}
