import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion'

@Component({
  selector: 'app-q-and-a',
  standalone: true,
  imports: [
    MatIconModule,
    MatExpansionModule,
  ],
  templateUrl: './q-and-a.component.html',
  styleUrl: './q-and-a.component.scss'
})
export class QAndAComponent {

}
