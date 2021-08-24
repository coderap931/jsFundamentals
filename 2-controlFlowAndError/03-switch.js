//SWITCH STATEMENTS

let friend = 'Kenn';

switch(friend){
    case 'Tom':
        console.log('Hey Tom!');
        break;
    case 'Kenn':
        console.log('Hey Kenn!');
        break;
    case 'Alex':
        console.log('Hey Alex!');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

let yup = true;

switch(typeof yup == 'string' || typeof yup == 'boolean'){
    case true:
        console.log('Yup is a string or boolean!');
        break;
    default:
        console.log('Yup is not a string or a boolean')
}