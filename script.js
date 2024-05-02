function add(x,y){
    return x + y;
}
console.log(add(2,3));//returns 5

function subtract(x,y){
    return x - y;
}
console.log(subtract(2,3));//returns 5

function divide(x,y){
    return x / y;
}
console.log(divide(2,3));//returns 5

function multiply(x,y){
    return x * y;
}
console.log(multiply(2,3));//returns 5

const add2 = (a,b) =>{
    return a + b
}
console.log(add2(2,3))

const subtract2 = (a,b) =>{
    return a - b
}
console.log(subtract2(2,3))

const divide2 = (a,b) =>{
    return a / b
}
console.log(divide2(2,3))

const multiply2 = (a,b) =>{
    return a * b
}
console.log(multiply2(2,3))

const person = {
    name: 'Charles',
    shirt: 'white'
}
console.log(person['name']);
console.log(person['shirt'])

person.phone = '444-555-7777'
console.log(person.phone);
console.log(person);
const name = function(){}

const introducer = (name,shirt)=>{
    const person = {
        name: name,
        shirt: shirt
    }
    const introducer = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt}`

    return introducer
    
}
console.log(introducer('Terry', 'black'));