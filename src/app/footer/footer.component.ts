import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  faCamera,
  faPhone,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  faCamera = faCamera;
  faPhone = faPhone;
  faDownload = faDownload;
  faGithub = faGithub;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
}
