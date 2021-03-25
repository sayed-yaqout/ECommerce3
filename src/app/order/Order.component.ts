import {Order}from './order';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'order',
  templateUrl: './Order.component.html',
  styleUrls: ['./Order.component.css']
})
export class OrderComponent implements OnInit {
@Input() order:Order;
  constructor() { }

  ngOnInit(): void {
  }

 @Input() orderDetails;
}
