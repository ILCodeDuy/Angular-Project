import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping,faMagnifyingGlass,faUser } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,FontAwesomeModule,RouterLink,CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  logo: string = "LOGOW2.png"
  cart = faCartShopping
  profile = faUser
  search = faMagnifyingGlass

  isHeader2: boolean = false;

  constructor(private router: Router) {
    // Lắng nghe sự kiện thay đổi route
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        // Kiểm tra nếu route hiện tại là /products
        this.isHeader2 = e.urlAfterRedirects.includes('/products');
      }
    });
  }

  ngOnInit(): void {}
}
