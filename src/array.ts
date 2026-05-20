let names = ["Aime","John","Sarah"];
let results = [true,false,true];
console.log(results)
console.log(names[0]);
names.push("Manzi");
names.pop();
names.unshift("Paccy");
console.log(names.includes("Paccy"));
console.log(names)

//Foreach()

names.forEach((name) =>{
    console.log(name)
})
results.forEach((result) =>{
    console.log(result)
})

let scores = [40, 70, 90];
scores.forEach((score) =>{
    console.log(score + 10)
})


//map()

let doubledNumber = scores.map((score) =>{
    return score * 2
})
console.log(doubledNumber)

let capitalNames = names.map((names) =>{
    return names.toUpperCase();
})
console.log(capitalNames);


//filter

let numbers = [10, 20, 30, 40, 50];

let filteredNumbers = numbers.filter((number) =>{
    return number > 25;
})

console.log(filteredNumbers);

//find : first number that satisfy the condition

let foundNumber = numbers.find((numbr) =>{
    return numbr > 25;
} )
console.log(foundNumber);

//includes

console.log(numbers.includes(10));

let users = [
    {name: "Aime", age: 20},
    {name: "John", age: 17},
    {name: "Paccy", age: 21},
    {name: "Sarah", age: 19}
]

let firstUser = users[0];

if (firstUser) {
    console.log(firstUser.age);
}

users.forEach((user) =>{
    console.log(user);
})

let oldUsers = users.filter((user) =>{
    return user.age > 18
})
oldUsers.forEach((old) =>{
    console.log(old)
})
