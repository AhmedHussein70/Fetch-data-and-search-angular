import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  pdfDataUrl = '../../assets/AhmedHusseinFinal.pdf';
  faDownload = faDownload;

  downloadPdf() {
    const link = document.createElement('a');
    link.href = this.pdfDataUrl;
    link.download = 'AhmedHussein.pdf'; // Replace with your desired file name
    link.click();
  }
}
