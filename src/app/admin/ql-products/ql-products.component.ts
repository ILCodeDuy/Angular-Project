
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface Product {
  id?: number;
  code: string;
  name: string;
  quantity: number;
  price: number;
  description: string;
  img: string;
  categoryId: number;
}
@Component({
  selector: 'app-ql-products',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,CommonModule,ReactiveFormsModule],
  templateUrl: './ql-products.component.html',
  styleUrl: './ql-products.component.css'
})



export class QlProductsComponent implements OnInit{
  public data: any[] = []
  productForm!: FormGroup;
  constructor(private http: HttpClient,private fb: FormBuilder){
    this.productForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(0)]],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      img: ['', Validators.required],
      categoryId: ['', [Validators.required, Validators.min(0)]]
    });
  }
  ngOnInit(): void {
    this.fetchData();
    
  }
  onSubmit(): void {
    if (this.productForm.valid) {
      const formData: Product[] = this.productForm.value;
      console.log('Form Data:', formData);
      this.http.post("http://localhost:3000/api/data",formData).subscribe(
        (resp: any) => {
          this.data.push(resp);
          alert('Product added successfully!');
          this.productForm.reset();
          window.location.reload();
        },
        (error: any) => {
          console.error('Failed to add the product', error);
          alert('Failed to add the product');
        }
      );
    }
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
