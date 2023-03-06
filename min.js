/* MINIMUM 1.Follow the addition of 0.1 and 0.2 
The mathematically correct answer.
FIRST variant:

let a = 0.1;                            assign a value
let b = 0.2;                            assign a value
let sumOfNumber = a + b;                do mathematic operation with values
console.log(+sumOfNumber.toFixed(2));   answer with rounding in number data type*/

/* SECOND variant:

let numFirst = prompt("Enter a decimal number for mathematical addition (like 0.1):");    we ask the user for the first value
let numSecond = prompt("Enter one more decimal number (like 0.1):");                      we ask the user for the second value
let sumOfNumbers = Number(numFirst) + Number(numSecond);                                  do mathematic operation with values and swits into number data type
alert(`this is your sum of numbers: ${sumOfNumbers.toFixed(1)}`);                         answer with rounding*/

console.log(`result: ${(0.1 * 10 + 0.2 * 10) / 10}`); /* third variant - rounding into an expression */


/* 2.Add the "1" line and numbers 2 (both operands should be in variables), 
get a mathematically correct answer. 
let num1 = "1";
let num2 = 2;

the FIRST variant swiches into number data type:
let sumOfData = +num1 + num2;  
console.log(sumOfData);*/

/* the SECOND variant swiches into number also: 
let sumOfData = Number(num1) + num2; 
console.log(`result: ${sumOfData}`);*/

console.log(`result: ${Number("1") + 2}`);/*The THIRD variant*/


/*3.The user indicates the volume of the flash drive in GB.
The program should calculate how many files in the size of 820 MB are placed on a flash drive.*/
let flashSizeGb = prompt("Enter the volume of the flash drive in GB (number)"); /* we ask the user for the first value */
/*let numFiles = Math.floor((flashSizeGb * 1024) / 820);  we'll find out how many MB are in 1 GB 
                                                          and how many files with a size of 820 MB 
                                                          will fit in a flash drive with a given value*/
alert(`On a flash drive with a capacity of ${flashSizeGb} GB, you can save ${Math.round((flashSizeGb * 1024) / 820)} files and every file has 820 MB`); /* answer */
