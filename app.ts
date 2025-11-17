class Product{
    public name:string;
    public price:number;
    public stock:number;

    constructor(name:string,price:number,stock:number){
      this.name=name;
      this.price=price;
      this.stock=stock;
    }

    sell():void{
        if (this.stock<0) {
              console.log("Stock is empty");
        }
        this.stock--;
    }
}

class Cart {
    public items: Product[];

    constructor() {
        this.items = [];
    }

    add(product: Product): void {
        if(product.stock>0){
            this.items.push(product);
        }
        else console.log(`${product.name} is out of stock}`);
    }

    getTotal(): number {
        let total = 0;
        this.items.forEach((item) => {
            total += item.price;
        });
        return total;
}}

const product1= new Product ("kitab",13,3) 
const product2= new Product ("qelem",1,1) 
const product3= new Product ("defter",3,2) 

product1.sell()
product2.sell()
product3.sell()
product3.sell()

const cart1=new Cart()
cart1.add(product1)
cart1.add(product2)
cart1.add(product3)

console.log(cart1.getTotal());

class ElectronicsProduct extends Product {
    public warrantly: number
    constructor(name:string,price:number,stock:number,warrantly:number){
        super(name,price,stock)
        this.warrantly=warrantly
    }

    showWarrantly():void{   
        console.log(`${this.warrantly} months warranty`);
    }

   sell():void{
    super.sell()
    console.log(`${this.name} is sold`);
    
   }

}
