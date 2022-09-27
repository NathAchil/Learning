console.log('The following below are results from operator.js');
let x = 1;
console.log('x is 1')
x = -x; //x is now -1
console.log('x = -x makes x into -1')
let y = 2;
console.log('y is 2');
y = y + -x; //y will now be 3
console.log('Y was set to y plus -x, which makes 3, because y is 2, and x is -1, since negative of -1 is 1, then, y + -x = 3'); console.log(y);

/*Just a reminder +addition -subtraction *multiplication /division
the others are more complicated*/

function cl(logMsg) {console.log(logMsg);};

let xyR = 45 % 4;//returns one because of 45/4 gives you 11 and gives you one remaining number
console.log('xyR is 45/4 get remainder, you should get one'); console.log(xyR);
let xyE = 9**2;//returns 81 because 9 multiplied by 9 is 81.
console.log('xyE is 9 ^ 2, which is 81'); cl('xyE');

/*string concatenation*/
let string = "my" + "string"; //returns "mystring"
cl('string is defined with "my" + "string", the result should be mystring');cl(string);
let twelve = "1" + 2,
    twenty_one = 2 + '1';
cl('twelve is 1 + 2, and twenty one is 2 + 1'); cl(twelve); cl(twenty_one);
let firstTwoCombined = 2 + 2 + '1', //returns 41, the first two's were combined
    noneCombined = '1' + 2 + 2; //returns 122, the first one made it into a string, so the others were not combined anymore
cl('2 + 2 + \'1\' makes 41, the first two two\'s make 41');cl(firstTwoCombined);
cl('\'1+\' + 2 + 2 makes 122, since it assumes that the 1 makes it into a string and not combines the numbers');cl(noneCombined);
/*doing this with any other operator turns all operands into numbers*/

let P = 1;
P = +P; //No change, still 1
let N = -2;
N = +N; //No change, still -2
cl('making a number positive like varName+ will not change anything');cl(N);

/*Not numbers will be then converted to numbers*/
let one = +true; let zero = +"";
cl('true is one, so doing +true makes it into a number');cl(one);cl('same for not truth objects or variables or whatever');cl(zero);

let twos = "2"; one = "1";
let result = twos + one;//result is 21
cl('string + string = stringstring, but +string + +string = the added number of string')
result = +twos + +one;//result is 3

/*Chaining assignments*/
let AA, b, c;
AA = b = c = 2 + 2 + 2;//a, b, and c, all return 6
cl('AA = b = c = 2 + 2 + 2 all return 6');

/*modifying variables in place*/
let gF = 6;
gF = gF * 2;
/*same as*/
gF *= 2; //will return 24, b/c it was multiplied twice
cl('varName = varName (insertMathSymbol) anyNumber is the same as varName (insertMathSymbol)= anyNumber');

let counter = 0;
counter++; //counter is now 1
let a = ++counter; //a is 2, counter is 2
cl('++varName adds to it during the assignment it\'s in, while varName++ is after');
a = counter++; //a is still 2, counter is now 3

let aAa = (1 + 2, 3 + 4); //result is 7, parentheses are vital so that it decides to do the stuff inside the parentheses