//IF ELSE CONDITIONALS

let weather = 75;

if (weather < 70){
    console.log('Wear a jacket!');
} else {
    console.log('No jacket needed!');
}

if (weather > 70 && typeof weather === 'number'){
    console.log('This weather is amazing!');
} else {
    console.log('Either the temperature is cool, the variable is not a string, or BOTH!');
}

//ELSE IF CONDITIONALS

let age = 25;

if (age >= 25){
    console.log('Yay, you can rent a car!');
} else if (age >= 21){
    console.log('Yay, you can drink!');
} else if (age >= 18){
    console.log('Yay, you can vote!');
} else {
    console.log('Sorry, you are too young to do anything fun.');
}