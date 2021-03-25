import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../order/order';

@Injectable({
  providedIn: 'root'
})
export class CartToOrderService {
  private baseUrl:string= "http://localhost:3000/api/order";
  //private baseUrl:string= "https://ecommerceapp-sportswear.herokuapp.com/api/order";

  constructor(private httpclient:HttpClient) { }
  makeOrder(_order:Order)
  {
      return this.httpclient.post(this.baseUrl+"/add",_order)
           // get order after cashout and save it in service object (order)
  }
  getOrder()                //give order to database or sabrina
  {
    //return this.order;
  }
}



// import { Injectable } from '@angular/core';
// import { Order } from '../order/order';
// import { Product } from '../product/Product';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartToOrderService {
// order:Order
//   constructor() { }
//   makeOrder(_order:Order)
//   {
//       this.order=_order     // get order after cashout and save it in service object (order)
//   }
//   getOrder()                //give order to database or sabrina
//   {
//     return this.order;
//   }
// }
