/**
 * Created with JetBrains WebStorm.
 * User: Carmine Trovato
 * Date: 9/25/13
 * Time: 6:56 PM
 * To change this template use File | Settings | File Templates. */

//Carmine Trovato         09/25/2013              Functions: Personal

/* This Problem will calculate if your eligible for a discount based on your StudentID or the time day  */

console.log("Are You Eligible For A Student Discount?"); /*console.log Problem Title */

/* the studentId prompt will input if proper ID is Present */
var studentId=prompt("DO YOU HAVE A VALID STUDENT ID: YES or NO ");

/* the variable prompt will input the time */
var time=prompt("PLEASE ENTER TIME OF DAY");

/* the meal price will be decided from the "if" "else" statement after all variables are entered */
var mealPrice="";

/* This "if" "else" statement will calculate if the Student has a valid ID, AND/OR The time of day based on happy hour
 "ELSE" will input a meal price of $6.00, if user has no valid ID or the time isn't between 4 and 5.*/

function discount(t,s){               /* The Function discount is passing the parameters Time and Student Id */

if (t>=4 && t<=5)
    {return mealPrice=4.50;}          /* The "IF" conditional is returning mealPrice 4.50 IF time is beteen 4 and 5  */

else if(s=="yes")
    {return mealPrice=4.50;}          /* The "IF ELSE" conditional is returning mealPrice 4.50 IF student ID is "yes" */

