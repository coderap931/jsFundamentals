//FUNCTIONS

//example one:
function newFunc(num){
    return num + 1;
}

console.log(newFunc(7));
console.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));

//example two:
function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}`;
}

console.log(sentence('Jonathan', 'Huer'));
console.log(sentence('Tyler', 'Shelton'));
let superImportantSentence = sentence('Nicky', 'Disborough');
console.log(superImportantSentence);

//build a function that takes a complex type (array) and console.log each item in the input array
let arr = [1, true, {key:'string'}, [0, false, null], 'heya'];
let arr2 = [5, 6, 7, 8, 9, 10];

function iteratorFunc(inputArr){
    for (let element of inputArr){
        console.log(element);
    }
}
iteratorFunc(arr);
iteratorFunc(arr2);