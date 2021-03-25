import { Product } from './Product';
import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from '../services/messenger.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:Product=new Product(null,"","",0,"","");
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

  }
  addToCart() {
    // var dublicated = false
    if (!this.msg.cashed) {
      // if (this.msg.carts.length == 0) {
        this.msg.carts.push(this.product);
        console.log(this.product);

      //   // this.msg.Quantity.push(1);
      // }
      // else {
      //   // this.msg.carts.forEach(item=>{
      //   //   if(item.productId==this.product.productId)
      //   //   {
      //   //     this.index++;
      //   //   }
      //   // })
      //   for (var i = 0; i < this.msg.carts.length; i++) {
      //     if (this.product.productId == this.msg.carts[i]) {
      //       // this.msg.Quantity[i]++;
      //       // dublicated = true;
      //     }
      //   }
      //   if (!dublicated) {
      //     this.msg.carts.push(this.product)
      //     // this.msg.Quantity.push(1);
      //   }
      // }

    }
    // this.index++;
  }

}
