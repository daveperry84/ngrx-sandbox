import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-back-to-home-link',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './back-to-home-link.component.html',
  styleUrl: './back-to-home-link.component.scss'
})
export class BackToHomeLinkComponent {
  
}
