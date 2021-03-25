import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private baseUrl ="http://localhost:3000/api/order/";
  //private baseUrl ="https://ecommerceapp-sportswear.herokuapp.com/api/order/";
  getToken()
    {
        const token= localStorage.getItem("user-orders-token");
        if (token==null)
            return '';
        else
            return token;
    }

  constructor(private http: HttpClient) { }

  getAllOrders(){
    return this.http.get(this.baseUrl+"getall");
  }

  getOrders(username){
    return this.http.get(this.baseUrl+"getuserorders/"+username);
  }


}

