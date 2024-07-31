import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skils',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skils.component.html',
  styleUrl: './skils.component.css',
})
export class SkilsComponent {
  skills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 98 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'React', percentage: 95 },
    { name: 'Angular', percentage: 15 },
    { name: 'MongoDB', percentage: 70 },
    { name: 'MySQL', percentage: 50 },
    { name: 'Laravel', percentage: 50 },
  ];
}
