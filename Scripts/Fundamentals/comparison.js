let strCompare1 = 'z' > 'a'; //returns true, as z is greater, or happens later than a
console.log(strCompare1);

console.log('   ');

console.log('The following below is from comparison.js unless otherwise specified. This is because I\'m using a function that shortens console.log');

/*
'2' > 1;  2 is greater than 1
'01' = 1;  01 is 1, 1 is equal to 1
true = 1;
false = 0; 
true != 0; true does not equal 0
*/
let weirdCompare = 'a' > 'A';
cl('');
cl('weirdCompare compares if a is greater than A');
cl(weirdCompare);
cl('since it says true, a is greater than A');

/*
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
*/
a = 0; cl(Boolean(a)); cl('Boolean of 0 (number) is false');
b = '0'; cl(Boolean(b)); cl('Boolean of \'0\' is true, since a non empty string is true')
cl(a == b); cl('If it worked, the statement above should be true');
cl('The statement 2 lines above is whether or not \'0\' is equal to 0 even though doing Boolean() on them gets different results');

cl('');
cl('= is not the same as ==');
cl('\'\' = false');
cl(0==false);


cl('null == undefined'); cl(null == undefined);
cl('null === undefined is false'); cl(null === undefined);

cl('null == 0 false, null > 0 false, null >= 0 true');
cl(null == 0); cl(null > 0); cl(null >= 0);