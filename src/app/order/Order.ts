export class Order{

  constructor(
    private _id,
    private userName:string,
    private date:string,
    private totalPrice:number,
    private productTitles:string[],
    private status:string)
    {

    }
}

