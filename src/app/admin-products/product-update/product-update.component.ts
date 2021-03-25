import { ProductService } from './../../adminServices/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  @Input() product= new Product(null,"",null,0,"","");
  constructor(private _router:Router,private productService:ProductService) {

  }

  ngOnInit(): void {
    console.log(this.product.image);

  }

  updateProduct(){
    this.productService.passProductToEdit(this.product);
    //here we need to pass the route for edit product component

    this._router.navigateByUrl('/AdminDashboardComponent/adminEditProducts');
    // this._router.navigate(['/AdminDashboardComponent/adminEditProducts']);
  }

  deleteProduct(){
    this.productService.deleteProduct(this.product.title).subscribe((data)=>{
      console.log(data);
    },(err)=>{console.log(err);
    });

  }

}
