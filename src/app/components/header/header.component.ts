import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, RouterLink, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // corrected styleUrls from styleUrl
})
export class HeaderComponent implements OnInit {
  logo: string = "LOGOW2.png";
  cart = faCartShopping;
  profile = faUser;
  search = faMagnifyingGlass;

  isHeader2: boolean = false;

  header2Routes: string[] = ['/products', '/login'];

  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.isHeader2 = this.header2Routes.some(route => e.urlAfterRedirects.includes(route));
      }
    });
  }

  ngOnInit(): void {}
}
