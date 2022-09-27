/*All the following below are numbers*/
let number = 11037;
number = Infinity; number = -Infinity;
number = NaN;
number = 3.14;
number = 1 / 0; /*Returns infinity*/
number = 'notANumber' / 2 /*Returns NaN (Not a Number)*/
/*There's also big numbers, or any number bigger than 2^53 - 1, but we won't be needing that*/

/*All the following below are strings*/
let str1 = 'Single air quotes',
    str2 = "Double air quotes",
    str3 = `Backticks`;

let example = `${1/0} is very big`; document.getElementById('statement').innerHTML = example;
/*the inside of ${} was processed, do ``, "" and '' don't work with ${}*/


/*The following below are boolean types*/
let isSSF2fun = true;
let isSchoolNotNegative = false;
/*There's a difference between "true" and true*/
let comparison = 23 > 5; //returns true

/*The two variable types below are both unique and don't belong in any type and are in their own types*/
let nothing = null;
let unknown = undefined;
/*There's also object and symbol, but the tutorial says it'll cover it later*/

/*The below covers typeof, but unfortunately, the tutorial explains that there are plenty of exceptions to some cases of the typeof operator*/

let nothingType = typeof nothing; //object, but the type of it is actually null
let booleaN = typeof true; //returns boolean

let typesLog = 'types.js worked'; console.log(typesLog);