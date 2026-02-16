import { Product } from './product'

export class Playstation extends Product {
  // TODO: implement class properties, constructor with super(...), and methods
  generation:number;
  N:string = '';
  profile:string = '';
  discount:number = 0;
  

  constructor(name:string,generation:number,price:number){
    super()
    this.N = name;
    this.generation = generation;
    this.price = price;
  }

  getProfile(){
    this.profile = `PS${this.N} (Gen ${this.N})`
    return this.profile
  }
  getDiscountPrice(){
    this.discount = this.price -((this.price * Product.DISCOUNT_PERCENT)/100);
    return this.discount;
  }
}