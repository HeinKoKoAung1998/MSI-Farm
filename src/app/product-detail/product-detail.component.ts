import { Component,OnInit,OnDestroy } from '@angular/core';
import{Router,ActivatedRoute,Route}from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

   product: Product | undefined;
   id: any;

   constructor(private activatedRoute: ActivatedRoute, private router: Router,private productService: ProductService){}
   sub: any;
  ngOnInit(): void {

    // Using Snapshot
    // this.id= this.activatedRoute.snapshot.params['id'];
    // let products = this.productService.getProducts();
    // this.product = products.find((p)=> p.productID == this.id)

    this.sub= this.activatedRoute.paramMap.subscribe((params)=>{
      console.log(params)
      this.id = params.get('id');
      this. product = this.productService.getProduct(this.id);
      // this.product= products.find((p)=>p.productID==this.id)
    })
  }

  ngOnDestroy(){
    if(this.sub)this.sub.unsubscribe();
  }

  onBack():void{
    this.router.navigate(['product']);
  }

}
