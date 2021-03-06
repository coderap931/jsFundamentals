//LITERALS

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(weekDays.toString());
console.log(weekDays[3]);

let soup = {
    a: 'Chicken Noodle',
    b: 'Tomato',
    c: 'Beef and Barley'
}
console.log(soup.c);

//Array and Object literals can hold primitive and complex types (arrays, objects, functions)
let complexArrLiteral = [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes';}];
console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[3]);

let complexObjLiteral = {num: 1, boolean: true, string: 'academy', arr: [1,2,3], obj: {key: 'test'}, func: function(){return 'yes'}};
console.log(complexObjLiteral.func);
console.log(complexObjLiteral.arr);