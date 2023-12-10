const { getRandomValues } = require("crypto");

a = {
    a: [1, 2]
};
b = {
    b: [3, 4]
};

c = {
    c: [5, 6]
};

console.log(a.a);
console.log(b.b);
console.log(c.c);

let First = new Object();
let Second = new Object();
let Third = new Object();

First.FirstObject = 'first';
Second.SecondObject = null;
Third.ThirdObject = [1, 'string', 3, null, 5];

console.log('=================================\n', First, '\n=================================')
console.log('=================================\n', Second, '\n=================================')
console.log('=================================\n', Third, '\n==================================')

QA_engineer = {
    Firstname: 'Yevgheniy',
    experiens: '3 years',
    age: 21
}

let Lastname = Object.create(QA_engineer);
console.log(`Created new prototype of QA object.Data from prototype is ' ${Lastname.Firstname} '`)
console.log('GetPrototypeOf Lastname === QA_engineer is:', Boolean(Object.getPrototypeOf(Lastname) === QA_engineer))

let engineer = Object.create(Lastname);
console.log(`\n---------------------\n Firstname from QA: '${engineer.Firstname}',\n---------------------\n Experiens from QA: '${engineer.experiens}',\n---------------------\n Age from QA: '${engineer.age}'`)
console.log(`\n Firstname from QA to engineer: '${engineer.Firstname}',\n Experiens from QA to engineer: '${engineer.experiens}',\n Age from QA to engineer: '${engineer.age}'`)
console.log('GetPrototypeOf engineer === Lastname is:', Boolean(Object.getPrototypeOf(engineer) === Lastname))

//===========================================================================================================================================================================================================================


let person = Object.create(engineer);
console.log()
console.log(`Person is a __proto__ from Lastname: ${Boolean(Object.getPrototypeOf(person) === engineer)}`)

console.log(`QA_engineer: \n Firstname: ' ${QA_engineer.Firstname} ',experiens' ${QA_engineer.experiens} ',age: ' ${QA_engineer.age} '\n`)
console.log(`Data from engineer: \n Firstname: ' ${engineer.Firstname} ',experiens: ' ${engineer.experiens} ',age: ' ${engineer.age} '\n`)
console.log(`person: Firstname: \n Firstname: ' ${person.Firstname} ',experiens: ' ${person.experiens} ',age: ' ${person.age} '\n`)

