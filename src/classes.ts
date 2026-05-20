class Users {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(): string{
        return `Hello ${this.name}`;
    }

    isAdult(): boolean{
        return this.age >= 18;
    }
}

class Product {
    name: string;
    price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }
    getInfo(): string{
        return `${this.name} costs ${this.price}`;
    }
}

let product = new Product("laptop",500);
console.log(product.getInfo());
