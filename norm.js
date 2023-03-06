/* NORM 1.The user introduces the amount of money in the wallet and the price of one chocolate. 
The program outputs how many chocolates the user can buy and how many surrenders he will remain.*/
let money = prompt("Enter the amount of money in the wallet in UAH");
let price = prompt("Enter the price of one chocolate bar");
alert(`You can buy ${Math.floor(money / price)} chocolates and you'll have change ${(money % price).toFixed(2)} UAH`);

/* 2.Ask the user a three -digit number and bring it back in advance.
You will need an operator % (division residue) to solve the task. */ 
let number = prompt("Enter a three -digit number:");
let ones = number % 10;
let tens = Math.floor((number / 10) % 10);
let hundreds = Math.floor(number / 100);
let reversed = ones * 100 + tens * 10 + hundreds;
alert(`Entered number: ${number} and the number is backwards: ${reversed} `);
