//FOR OF LOOPS

//of requires that your object that you loop through be iteritable--that means it needs to be numbered

// let student = {name: 'peter', isAwesome: true, degree: 'javascript', week: 1};

// for(item of student){
//     console.log(item);
// }

let catArray = ['Tabby', 'British Shorthair', 'Burmese', 'Maine Coon', 'Rag Doll'];

for (cat of catArray){
    console.log(cat, 'says meow!');
}