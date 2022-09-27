/*alert('This alert message exists'); alert('this too also exists');
this is a comment, so this code will not work alert('this should not be seen');*/

/*Variables*/

let message;

message = 'Hello there, this came from a variable named "message".'
/*^^^ declares a variable, or makes a new variable named "message"*/

/*Says that the variable "message" is this string*/


/*You can also declare variables in the same line*/
let newVar = 'whatever thing';

document.getElementById('messenger').innerHTML = message;

/*Declaring multiple variables on the same line*/
let name = 'Ethan', age = '14', state = '...';
let bname = 'Aidan',
    b_age = '12',
    bstate = 'annoying AF';
/*Both lets are valid*/

const constantVar = 'never changing';
/*That ^^^ variable is constant, cannot be changed*/


let variableLog = 'variable.js worked'; console.log(variableLog);

/*below not discussed in javascript.info but in tutorial video found online seperate from javascript.info, probably b/c its high level stuff*/
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let product1 = [name = 'Pokefun', cost = 5, color = 'red'];
let product2 = [name = 'Pokeball', cost = 10, color = 'red'];