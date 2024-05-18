import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FontAwesomeModule,HeaderComponent,FooterComponent,HomeComponent,CommonModule,RouterLink,DashboardComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ASM';
  isAdmin: boolean = false;
  adminPaths: string[] = ['/admin', '/ql-products', '/ql-categories'];

  constructor(private router: Router) {
    // Subscribe to router events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route matches any of the admin paths
        this.isAdmin = this.adminPaths.some(path => event.urlAfterRedirects.includes(path));
      }
    });
  }

  ngOnInit(): void {
    // Optional: Check the initial route on component initialization
    this.checkAdminRoute(this.router.url);
  }

  // Optional method to check the initial route
  private checkAdminRoute(url: string): void {
    this.isAdmin = this.adminPaths.some(path => url.includes(path));
  }
}
