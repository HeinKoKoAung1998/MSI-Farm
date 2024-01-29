export class Product{

    
    constructor(
        id: number,
        name: string,
        image: string,
        from: string,
        nutrients: string,
        quantity: string,
        price: number,
        organic: boolean,
        description: string
    ){
      this.id = id;
      this.name = name;
      this.image = image;
      this.from = from;
      this.nutrients = nutrients;
      this.quantity = quantity;
      this.price = price;
      this.organic = organic;
      this.description = description  
    }

    id: number;
    name: string;
    image: string;
    from: string;
    nutrients: string;
    quantity: string;
    price: number;
    organic: boolean;
    description: string;
}

// export interface Product{
//   id : number;
//   name: string;
//   image : string;
//   from: string;
//   nutrients: string;
//   quantity: string;
//   price: number;
//   organic: boolean;
//   description: string;
// }