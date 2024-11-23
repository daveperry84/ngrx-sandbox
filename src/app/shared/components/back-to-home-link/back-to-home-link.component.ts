import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-to-home-link',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './back-to-home-link.component.html',
  styleUrl: './back-to-home-link.component.scss'
})
export class BackToHomeLinkComponent {
  constructor(private router: Router) {}

  navigateHome(): void {
    void this.router.navigate(['../home']);
  }
}
