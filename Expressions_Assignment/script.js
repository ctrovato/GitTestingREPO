/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 9/20/13
 * Time: 9:28 PM
 * To change this template use File | Settings | File Templates.
 */


/*
    Carmine Trovato
    09/20/2013
    Expressions Assignment
    */




/*
_________________PROBLEM ONE: Personal____________________________________________
This Problem calculates my average GPA over the past 7 semesters.
*/

console.log("Problem One:  Personal");

var myGPAscores=["3.5","3.5","3.5","3.5","3.5","3.5","4.0"];     /* Given*/ /* Array */
var totalGPA= 25;                 /* Result Variable */
var averageGPA= totalGPA/7;       /* Result Variable */

/* myGPAscores added, equaling totalGPA of 25. Then, the scores are divided by the number of semesters, which is 7.

 /* Result to Print with GPA as Floating Variable*/
console.log("Calculating all seven months here at full sail. My average  GPA is "+averageGPA+". This is an average of my total GPA scores." );

/* Space NOT NEEDED*/
console.log("")


/* __________________PROBLEM TWO: Industrial________________________________________
 This Problem calculates the price I will pay for the new 32GB iPhone 5s with a two year contract after sales tax.
 */
console.log("Problem Two:  Industrial")

var originalPrice= 300.00 ;   /*Given*/
var object= " 32GB iPhone 5S with a two year contract";  /*Given*/
var salesTaxPercentage= .07;  /*Given*/

var priceWithTax= (originalPrice*salesTaxPercentage)+(originalPrice);   /* Result Variable */

/* This calculation is solving the price after the sales tax. Taking originalPrice * salesTaxPercentage which is 21. Then adding the 21 to the original price. */

/* Result to Print */    /* String */
console.log("My "+object+" was originally $"+originalPrice+" with a two year contract through AT&T, but after sales tax, it comes to $"+priceWithTax+".");

/* Space NOT NEEDED */
console.log("")


/*
 _________________PROBLEM THREE: Wacky_______________________________________________
 This  Problem calculates how many wings each person at the table will be able to eat.
 */

console.log("Problem Three: Wacky")

var myself=1;           /*Given*/
var otherFriends= 2;     /*Given*/
var dozensOrdered= 4;    /*Given*/
var wingsPerDozen= 12;   /*Given*/

var wingsPerPerson= dozensOrdered * wingsPerDozen / (otherFriends+myself);  /* Result Variable */