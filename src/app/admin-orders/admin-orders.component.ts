import {Order} from '../order/order';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  actiondone:boolean
  orders
  constructor(private orderService :OrdersService) { }
  ngOnInit(): void {
    //call service to get all orders and equal respont to orders lis
    this.orderService.getAllOrders().subscribe(
      (respond)=>{
        console.log(respond)
        this.orders=respond["orders"];
      },
    (error)=>{
      console.log(error)
    });


    this.orders=
    [
      new Order(1,"sabrena1","2/23/2000",2444,["prodectname1"],"pending"),
      new Order(1,"sabrena2","2/23/2000",2444,["prodectname1"],"pending"),
      new Order(1,"sabrena3","2/23/2000",2444,["prodectname1"],"pending")
    ]
  }


  change(userId,btnAccept,btnDelete,value){
    if(value){

      btnAccept.disabled=true
        btnDelete.disabled=true
        let order= this.orders.find(i=>i.userId==userId)
        order.status=value.toUpperCase()
    }
  }
}
