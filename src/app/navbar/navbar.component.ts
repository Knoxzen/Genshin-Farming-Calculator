import { Component } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private clipboard: Clipboard) {}
  clickFunction(){
        this.clipboard.copy(window.location.href);
        alert('Link copied to clickboard')
  }
}
