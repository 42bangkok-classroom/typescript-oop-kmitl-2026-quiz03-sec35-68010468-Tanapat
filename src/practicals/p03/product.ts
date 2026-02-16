export class Product {
    readonly name:string ='';
    protected price:number = 0;
    static readonly DISCOUNT_PERCENT:number = 10;

    constructor(name?:string,price?:number){
        name ? this.name = name : name;
        price ? this.price = price : price;
    }

   getPrice(){
    return this.price
   }
    setPrice(price: number){
        this.price = price;
    }
}

