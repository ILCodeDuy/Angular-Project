
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ql-products',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,CommonModule],
  templateUrl: './ql-products.component.html',
  styleUrl: './ql-products.component.css'
})
export class QlProductsComponent implements OnInit{
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

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.http.delete(`http://localhost:3000/api/data/${id}`).subscribe(
        () => {
          // Remove the product from the local data array
          this.data = this.data.filter(product => product.id !== id);
          alert('Product deleted successfully');
        },
        error => {
          console.error('Failed to delete the product', error);
          alert('Failed to delete the product');
        }
      );
    }
  }
}
