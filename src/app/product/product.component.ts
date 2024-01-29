

import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] | undefined;

  constructor(private protectedService: ProductService){}

  ngOnInit(): void {
    this.products= this.protectedService.getProducts();
    console.log(this.products)
  }

}