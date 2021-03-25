import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../adminServices/product.service';
import { Product } from '../product/Product';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent implements OnInit {

  products:Product[];
  textSearh:string="";
  ProductList:Product[];
  subscriber;
  constructor(private _router:Router,private productService:ProductService) {

  }

  ngOnInit(): void {
      this.subscriber = this.productService.getAllProducts().subscribe(data=>{
      this.products = data;
      this.ProductList =data;
      console.log(data);
      console.log(this.products);
    },(err)=>{
      console.log(err);
    })
    //this.ProductList= this.products.slice();
  }

  onSearch(textSearch){
    this.textSearh =textSearch;
    if(textSearch!=undefined&&this.products.length!=undefined){
      this.ProductList=[];
      for(let i=0;i<this.products.length;i++){
        if(this.products[i].title.startsWith(textSearch)){
          this.ProductList.push(this.products[i]);
        }
      }
    }
  }

  OnChange(eve){
    const title = eve.target.value;
    if(title!=undefined&&this.products.length!=undefined){
      this.ProductList=[];
      for(let i=0;i<this.products.length;i++){
        if(this.products[i].title.startsWith(title)){
          this.ProductList.push(this.products[i]);
        }
      }
    }
  }


  navigateToAddProduct(){
    //here we need to pass the route for add product page
    this._router.navigate([]);
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
