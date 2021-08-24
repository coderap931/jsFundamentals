//FOR IN LOOPS

//in does not require that the object you loop through be numbered

let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

for(item in student){
    console.log(item);
    console.log(student[item]);
}

let catArray = ['Tabby', 'British Shorthair', 'Burmese', 'Maine Coon', 'Rag Doll'];

for (cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

//For-in loop that capitalizes the first letter of a name

let name = 'aDaM';
let capName;

for(i in name){
    if (i==0){
        capName = name[i].toUpperCase();
    } else {
        capName += name[i].toLowerCase();
    }
}
console.log(capName);