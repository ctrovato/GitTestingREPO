/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 9/26/13
 * Time: 7:28 PM
 * To change this template use File | Settings | File Templates.
 */


/*   Carmine Trovato      09/24/2013        Conditionals Industry  */

/* This Problem will find out if you will have enough money to buy a car without a loan */

/* Users input the Variables to obtain the totals of how much money you have */
var savings1=prompt("Enter Checking Account Total: ");
var checking1=prompt("Enter Savings AccountTotal: ");
var other1=prompt("Enter Other Assets Total: ");

/* Car Price Variable */
var subaruImpreza= 24999;

/*this variable Is the totalAssets of all cash assets */
var totalAssets= (savings1+checking1+other1);

/*this "IF" statement is stating if the TotalAssets is Greater than the car.
 The console log will output this statement */
if (totalAssets > subaruImpreza){
    console.log("Looks Like You Have Enough Money To Buy A Car WITHOUT A Car Loan");}

/*This "ELSE IF" statement is stating if the TotalAssets is equal than the car.
 The console log will output this following statement */
else if(totalAssets == 24999){
    console.log("Looks Like You Have Enough Money To Buy A Car BUT, You Should Probably Get A Car Loan");}

/*This "ELSE" statement will console log will output this following statement. If non of the above statements are true */
else  {console.log("Looks Like You Will Have To Take Out A Car Loan");}
