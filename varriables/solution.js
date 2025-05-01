// 1 Destructuring an arry

// const arr= [1,2,3,4,5];
// const [a,b] = arr;
// console.log(a,b)
// let rest = [...arr]
// console.log(rest)


// 2 using spread operator

// const obj1= { name: "Parth"};
// const obj2= { age:25};
// const newobj= {...obj1,...obj2}
// console.log(newobj)

// 3 default function parameter

// function multiply(a, b=2){
//     console.log(a*b)

// }
// multiply(2,4)

//4 function increment 

const person= { name:"parth" , age:30}
function incrementage(person){
    person.age=person.age + 1
    console.log(person)
}
incrementage(person)
incrementage(person)
incrementage(person)
incrementage(person)


// 5 rest parameter

// function sum(...num){
//     let sum=0
//     for (let i=0; i<num.length;i++){
//         sum+=num[i]

//     }
//     console.log(sum)
// }
// sum(1,2,3,4,5)