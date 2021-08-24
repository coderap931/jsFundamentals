/*
TYPES
*/

//Boolean
var on = true;
//Dark blue in JavaScript denotes a reserved word (ex. "var", "true", "false", etc.)
console.log(on);

let off = false;
console.log(off);

//Boolean can represent: true/false, yes/no, on/off, 0/1 (Binary values)

//Undefined

/*
Undefined usually means a variable has been declared, but has not been assigned a value
*/

let grass;
console.log(grass);

//No point in setting type as undefined manually, JavaScript does it automatically for containers not assigned a value (typically resultant of forgetting to assign a value, if intentional should use NULL (see next section))
var undef = undefined;
console.log(undef);

//Null
/*
Null means a variable has been declared and assigned a value of null
*/

var empty = null;
console.log(empty);

//Numbers
let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//Strings
//String is any value within quotes; JavaScript spits out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//string concatenation vs addition
let first = 1050 + 100;
let second = '1050' + '100';
console.log(first);
console.log(second);
let third = 1050 + 'abcde';
console.log(third);
console.log(typeof third);

//Interpolation
//lets you use strings with dynamic content (they require backticks``)

//Example 1:
let age = 32;
let string = `my age is: ${age}`;
console.log(string);

//Objects
/*
What is an object?

An object is a container that stores property names and their values (it can hold multiple data types)

Denoted by {}
Have keys and values -- color (key): 'blue' (value), sperarated with a colon, each key-value pair is seperated with a comma)
*/

let hulk = {
    color: 'green',
    age: 42,
    isStrong: true
}

console.log(hulk);
console.log(hulk.color);
console.log(typeof hulk);

//Arrays
/*
Arrays store mutiple values in an ordered way (difference between objects and arrays is that objects are unordered (like ul) and arrays are ordered(like ol))

Denoted by []
has values separated by commas

Arrays are indexed starting with the 0th place
*/

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush', 'clean toothbrush']
console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[3]);
console.log(typeof stepsToBrushTeeth);