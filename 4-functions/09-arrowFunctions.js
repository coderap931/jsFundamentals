//ARROW FUNCTIONS

//normal function declaration
function coffee(){
    return 'coffee is good';
}

//normal function expression
let tea = function(){
    return 'tea is healthy';
}

console.log(coffee());
console.log(tea());

//arrow functions are *always* anonymous, they also cannot be hoisted
//arrow function expression
let hotChocolate = () => {
    return 'hot chocolate is king';
}

console.log(hotChocolate());

let animals = (kittens, puppies) => {
    return `I have ${kittens} cat(s) and ${puppies} dog(s)`;
}

console.log(animals(3, 3));
console.log(animals(0, 0));

//concise vs block body for arrow functions
//concise body
let apples = (x) => `There are ${x} apple(s)`;
console.log(apples(10));

//block body
let bananas = (x) => {
    return `There are ${x} banana(s)`;
}

console.log(bananas(5));