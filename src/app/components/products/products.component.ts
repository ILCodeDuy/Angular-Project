import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,CommonModule,FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  plus = faPlus
  public data: any[] = []

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.fetchData();
  }

  public fetchData(){
    this.http.get("http://localhost:3000/api/data").subscribe(
      (resp: any) => {
        this.data = resp
      }
    )
  }
}
