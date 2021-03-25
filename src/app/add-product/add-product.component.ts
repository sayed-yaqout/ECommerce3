import { ProductService } from './../adminServices/product.service';
import { Product } from './../product/Product';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  imageSrc;
  product={title:"",image:null,price:0,details:"",size:""};
  @ViewChild('warningDiv', {static: true}) warningDiv :ElementRef;
  constructor(private productService:ProductService) {

  }

  ngOnInit(): void {
  }
imagePreview;
  OnUpload(event){
    if (event.target.files && event.target.files[0]) {
      this.imageSrc = event.target.files[0];
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = ()=> {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }


  OnCreateProduct(title,price,sizes,details){
    if(title!=""&&price!=0&&sizes!=""&&details!=""&&this.imageSrc!=null){
      //this.warningDiv.nativeElement.style.display ='none';
      const formData =new FormData();
      this.product = ({title:title,image:this.imageSrc,price:price,details:details,size:sizes});
      formData.append("title",title);
      formData.append("productImage",this.imageSrc);
      formData.append("price",price);
      formData.append("details",details);
      formData.append("size",sizes);
      let subscriber =this.productService.addProduct(formData)
      .subscribe((response)=>{
        if(response){
          console.log(response)
          this.OnDiscard();
        }
      },
      (err)=>{
        console.log(err);
      });
    }
    else{
      this.warningDiv.nativeElement.style.display='block';
    }
  }

  OnDiscard(){
      this.product = {title:"",image:null,price:0,details:"",size:""};
      this.imageSrc =null;
      this.imagePreview =null;
  }

}
