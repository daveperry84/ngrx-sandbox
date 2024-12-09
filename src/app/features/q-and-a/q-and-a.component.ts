import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion'
import { qAndAData } from '../../shared/constants/q-and-a-content.constant';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-q-and-a',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule,
  ],
  templateUrl: './q-and-a.component.html',
  styleUrl: './q-and-a.component.scss'
})
export class QAndAComponent {
  content = qAndAData;
}
