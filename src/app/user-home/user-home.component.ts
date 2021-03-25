import { Product } from '../product/Product';
import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { MessengerService } from '../services/messenger.service';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  cartGenerals=[]
  shirts:Product[]=[
  new Product(0,"TShirt-1","../../assets/images/a1.jpg",55,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
  new Product(1,"TShirt-2","../../assets/images/a2.jpg",58,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
  new Product(2,"TShirt-3","../../assets/images/a3.jpg",98,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
  new Product(3,"TShirt-4","../../assets/images/n1.jpg",12,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
  new Product(4,"TShirt-5","../../assets/images/n2.jpg",33,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
  new Product(5,"TShirt-6","../../assets/images/n3.jpg",34,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl")
  ];
  shoes:Product[]=[
    new Product(0,"shoes-1","../../assets/images/ns1.jpg",55,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
    new Product(1,"shoes-2","../../assets/images/ns2.jpg",58,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
    new Product(2,"shoes-3","../../assets/images/ns3.jpg",98,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
    new Product(3,"shoes-4","../../assets/images/ps1.jpg",12,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
    new Product(4,"shoes-5","../../assets/images/ps2.jpg",33,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
    new Product(5,"shoes-6","../../assets/images/ps3.jpg",34,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl")
    ];
    jackets:Product[]=[
      new Product(0,"Jacket-1","../../assets/images/nj1.jpg",55,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
      new Product(1,"Jacket-2","../../assets/images/nj2.jpg",58,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
      new Product(2,"Jacket-3","../../assets/images/nj3.jpg",98,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
      new Product(3,"Jacket-4","../../assets/images/pj1.jpg",12,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
      new Product(4,"Jacket-5","../../assets/images/pj2.jpg",33,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
      new Product(5,"Jacket-6","../../assets/images/pj3.jpg",34,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl")
      ];
      women:Product[]=[
        new Product(0,"TShirt-1","../../assets/images/nw1.jpg",55,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
        new Product(1,"TShirt-2","../../assets/images/nw2.jpg",58,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
        new Product(2,"TShirt-3","../../assets/images/nw3.jpg",98,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
        new Product(3,"TShirt-4","../../assets/images/aw1.jpg",12,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
        new Product(4,"TShirt-5","../../assets/images/aw2.jpg",33,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
        new Product(5,"TShirt-6","../../assets/images/aw3.jpg",34,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl")
        ];
        children:Product[]=[
          new Product(0,"home clothes-1","../../assets/images/pc1.jpg",55,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
          new Product(1,"home clothes-2","../../assets/images/pc2.jpg",58,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
          new Product(2,"home clothes-3","../../assets/images/pc3.jpg",98,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
          new Product(3,"home clothes-4","../../assets/images/ac1.jpg",12,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
          new Product(4,"home clothes-5","../../assets/images/ac2.jpg",33,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl"),
          new Product(5,"home clothes-6","../../assets/images/ac3.jpg",34,"this a summer t-shirt and come with 2 colors black and yellow","m-l-xl-xxl-xxxl")
          ];
    AllProducts=[]

    title
  constructor(private msg:MessengerService) {
   }
   filteredItems
   assignCopy() {
    this.filteredItems = Object.assign([], this.AllProducts)
  }
  ngOnInit(): void {


   //this.showCart()
  }
  filterItem(value) {
    if (!value||value==undefined) {
      this.assignCopy();
      value=""
    }
    this.filteredItems = Object.assign([], this.AllProducts).filter(
      item => item.title.toLowerCase()
      .indexOf(value.toLowerCase()) > -1
    )
  }
search(){
  this.filterItem(this.title)

}
  }

