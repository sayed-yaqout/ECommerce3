import { Product } from './../product/Product';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-general-home',
  templateUrl: './general-home.component.html',
  styleUrls: ['./general-home.component.css']
})
export class GeneralHomeComponent implements OnInit {

  products;
  constructor() { }

  ngOnInit(): void {
    this.products = [new Product(0,"TShirt-1","../../assets/images/a1.jpg",55,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
    new Product(1,"TShirt-2","../../assets/images/a2.jpg",58,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
    new Product(2,"TShirt-3","../../assets/images/a3.jpg",98,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
    new Product(3,"TShirt-4","../../assets/images/n1.jpg",12,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
    new Product(4,"TShirt-5","../../assets/images/n2.jpg",33,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
    new Product(5,"TShirt-6","../../assets/images/n3.jpg",34,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl")
    ];
  }



}
