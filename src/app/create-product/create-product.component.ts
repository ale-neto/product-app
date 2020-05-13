import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  
  product: Product = new Product();
  submitted = false;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {}

  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }

  save(){
    this.productService.createProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
    this.gotoList();
  }
  
  onSubmit(){
    this.save();
    this.submitted = true;
  }

  gotoList(){
    this.router.navigate(['/products'])
  }
}
