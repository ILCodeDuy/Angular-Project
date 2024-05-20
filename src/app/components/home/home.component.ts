import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet ,Router} from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,FontAwesomeModule,HttpClientModule,CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  bg: string = "hero-bg.jpg"
  anh: string = "o1.jpg"
  anh2: string = "o2.jpg"
  plus = faPlus

  aboutIMG: string = "about-img.png"

  public data: any[] = []

  constructor(private router: Router,private http: HttpClient){}
  ngOnInit(): void {
    this.fetchData();
  }
  navigateToProducts() {
    this.router.navigate(['/products']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  public fetchData(){
    this.http.get("http://localhost:3000/api/data").subscribe(
      (resp: any) => {
        this.data = resp
      }
    )
  }
}
