let product = {
  name: "Laptop",
  price: 500,
  inStock: true,
};

console.log(product.name);
console.log(product.price);
console.log(product.inStock);

let variableName: string = 'Hello'

function add(a: number,b: number): number {
    return a + b;
}


type User = {
    name: string;
    age: number;
};

let user: User = {
    name: "Asifiwe",
    age: 17
}

type Use = {
    name: string,
    age: number,
    email: string
}

let user1: Use = {
    name: "Aime",
    age: 20,
    email: "Asifiwe@gmail.com"
}

type Users = {
    readonly id: number;
    name: string;
    price: number;
}

let user2: Users = {
    id: 1,
    name: "Mucga",
    price: 4798
}