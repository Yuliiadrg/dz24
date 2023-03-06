/*MAXIMUM 1.The user enters the amount of the deposit in the bank for 2 months, 
with the interest rate of the deposit of 5% per annum.
Withdraw the amount of accrued interest.*/
let deposit = prompt("Enter the deposit amount:");
let rateOfDeposit = 0.05 / 12;
let depositAmount = Math.round(deposit * rateOfDeposit * 2);
const total = depositAmount + deposit ;
alert(`With a deposit interest rate of 5% per year, 
the amount of accrued interest on the deposit for 2 months will:" ${depositAmount} so in total: ${total}`);
/*2. That will return the expressions:
2 && 0 && 3   
2 || 0 || 3
 2 && 0 || 3*/
console.log(2 && 0 && 3); // answer 0
console.log(2 || 0 || 3); // answer 2
console.log(2 && 0 || 3); // answer 3