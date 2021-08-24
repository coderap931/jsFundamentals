//FOR LOOPS

/*
Types of loops:
for
do while
while
labeled
break
continue
for in
for of
.forEach
.map
*/

/*Loop structure:
1)Creation of an indexing variable
2)Run condition
3)Change to the indexing variable
*/

//Count to 10 from 0 and log each step
for(let i=0; i<=10; i++){
    console.log(i);
}

//Infinite loop
// for(let i=0; i++){
//     console.log(i);
// }

//Count to -25 by -3 starting from 2 and log each step
for(let i=2; i>=-25; i-=3){
    console.log(i);
}

//Display the letters in a name individually
let name ='Kinkade';

for(let i=0; i < name.length; i++){
    console.log(name[i]);
}

//For loops can use lots of variables
let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;

for(let i=start; i <= stop; i+=increment){
    console.log(i);
}