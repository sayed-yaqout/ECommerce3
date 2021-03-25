
export class Product{
  public _id:string;
  public title:string;
  public image:string;
  public price:number;
  public details:string;
  public size:string;

  constructor(_id,title,image,price,details,size) {
    this._id= _id;
    this.title =title;
    this.image =image;
    this.price =price;
    this.details =details;
    this.size=size;
  }
}
