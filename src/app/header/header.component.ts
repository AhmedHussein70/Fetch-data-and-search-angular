import { Component } from '@angular/core';
import { NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faDownload = faDownload;
  pdfDataUrl = '../../assets/AhmedHusseinFinal.pdf';
  downloadPdf() {
    const link = document.createElement('a');
    link.href = this.pdfDataUrl;
    link.download = 'AhmedHussein-C.V.pdf'; // Replace with your desired file name
    link.click();
  }
}
