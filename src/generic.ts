// Lesson: Generics in TypeScript

// A generic lets a function, type, or class work with many data types
// while still keeping type safety.

// Without generics, we may repeat ourselves:
function getFirstString(items: string[]): string | undefined {
    return items[0];
}

function getFirstNumber(items: number[]): number | undefined {
    return items[0];
}

console.log(getFirstString(["Aime", "Sarah", "John"]));
console.log(getFirstNumber([10, 20, 30]));

// With generics, one function can work with different types.
function getFirst<T>(items: T[]): T | undefined {
    return items[0];
}

let firstName = getFirst<string>(["Aime", "Sarah", "John"]);
let firstScore = getFirst<number>([80, 90, 100]);
let firstResult = getFirst<boolean>([true, false, true]);

console.log(firstName);
console.log(firstScore);
console.log(firstResult);

// TypeScript can also understand the type automatically.
let anotherName = getFirst(["Peace", "Divine"]);
let anotherScore = getFirst([50, 60, 70]);

console.log(anotherName);
console.log(anotherScore);

// Generic type
type ApiResponse<T> = {
    success: boolean;
    data: T;
};

type Student = {
    id: number;
    name: string;
    age: number;
};

let studentResponse: ApiResponse<Student> = {
    success: true,
    data: {
        id: 1,
        name: "Aime",
        age: 20
    }
};

let scoresResponse: ApiResponse<number[]> = {
    success: true,
    data: [70, 80, 90]
};

console.log(studentResponse.data.name);
console.log(scoresResponse.data);

// Generic function with an object
function printItem<T>(item: T): void {
    console.log(item);
}

printItem<string>("Hello generics");
printItem<number>(200);
printItem<Student>({
    id: 2,
    name: "Sarah",
    age: 17
});

// Generic with a constraint
// This means T can be any type, but it must have a name property.
function printName<T extends { name: string }>(item: T): void {
    console.log(item.name);
}

printName({ name: "Laptop", price: 500 });
printName({ name: "Aime", age: 20 });

// Mini exercise:
// 1. Create a generic type called Box<T>.
// 2. It should have one property called value.
// 3. Create one Box<string> and one Box<number>.
// 4. Create a generic function called showValue<T> that prints the value.
