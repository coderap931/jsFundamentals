//ARRAYS

// let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];

// console.log(typeof students); //typeof doesn't tell me my variable is an array, it says its an object
// console.log(students instanceof Array); //instanceof tells me my array is an array
// console.log(students[2]);
// console.log(students[1]);
// console.log(students[6]);

// let name = students[6][1];
// console.log(`Hello ${name}, you look nice today.`);

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hot Dog'];

// for (f of food){
//     console.log(f+' is amazing!');
// }

// //Array methods
// food.push('Pizza'); //added to the end of our array
// console.log(food);
// food.splice(1, 1, 'Bananas'); //starts at first parameter, deletes from there the number of things at the second parameter
// console.log(food);
// food.splice(2, 0, 'Sweet Potato Pie'); //starts at first parameter, deletes from there the number of things at the second parameter
// console.log(food);
// food.pop(); //removes the last element of the array
// console.log(food);

// food = food.slice(2,5); //first parameter is the starting point, second parameter is the ending postion (the ending position value isnt included ("to" not "through"))
// console.log(food);

//forEach allows us to iterate with loops specifically, and we can directly grab both the elements and their index numbers

// food.forEach((f) => console.log(f));

food.forEach((food, index) => {
    console.log(`The ${food} food in our array is at postion ${index}`);
});

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];
movies.push('The Force Awakens');
movies.splice(3, 1, 'The League of Extraordinary Gentlemen');
movies.forEach(movie => console.log(movie));
console.log(movies.length);

//Do the following with an array:
//Check if we are working with an array
//flip the values within the array (what was in index 4 is now in 0, 3 now in 1, etc.)
//using a method, print the values of the newly arranged array

let arr = new Array(1, 2, 3, 4, 5);
if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}