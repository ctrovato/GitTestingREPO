/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 9/15/13
 * Time: 5:31 PM
 * To change this template use File | Settings | File Templates.
 */


// Carmine Trovato
// September 13th, 2013
// Expressions Assignment

alert("Expressions Assignment: Carmine Trovato");




//__________DOG YEARS_____________
console.log("Problem 1")

var sparkysAge= 2;             /* Given */
var dogYears= sparkysAge* 7;   /* Result Variable */

/* Result to Print */
console.log("Sparky is "+sparkysAge+" in human years which is "+dogYears+" in dog years.");

console.log(" ")  /* Used For Spacing */




// __________Slice of Pie: Part One___________
console.log("Problem 2")

var partyPeople= 11;                 /*Given*/
var pizzaOrdered= 3;                 /*Given*/
var slicesPerPizza= 8;               /*Given*/
var slicesPerPerson= pizzaOrdered * slicesPerPizza / partyPeople;  /* Result Variable */

/* Result to Print */
console.log("Each person ate "+slicesPerPerson+ " precise slices of pizza at the party.");

console.log(" ")  /* Used For Spacing */




//__________Slices of Pie: Part Two____________
console.log("Problem 3")

var slicesPerPerson= pizzaOrdered * slicesPerPizza % partyPeople;  /* Result Variable */

/* Result to Print */
console.log("Sparky gets "+slicesPerPerson+ "  slices of pizza at the party.");

console.log(" ")  /* Used For Spacing */






//__________Average Shopping Bill__________
console.log("Problem 4")

var groceryBills=["55.50","70.85","45.00","47.50","60.30"];     /* Given */
var totalAmount= 279.15                                         /* Result Variable */
var averageSpending= totalAmount/5;                             /* Result Variable */

/* Result to Print */
console.log("You have spent $"+totalAmount+" on groceries over 5 weeks. That is an average of $"+averageSpending+" per week.");

console.log(" ")  /* Used For Spacing */




//____________DISCOUNTS_______________
console.log("Problem 5")

var originalPrice= 1100;              /*Given*/
var object= "42 inch Samsung TV";     /*Given*/
var discountPercentage= .20;           /*Given*/
var salesTaxPercentage= .06;           /*Given*/

var priceWithoutTax= originalPrice-(originalPrice*discountPercentage) ;   /* Result Variable */
var priceWithTax= priceWithoutTax+(priceWithoutTax*salesTaxPercentage);   /* Result Variable */


/* Result to Print */
console.log("Your "+object+" was originally $"+originalPrice+", but after a "+discountPercentage+"% discount, it is now $"+priceWithoutTax+" without sales tax, and $"+priceWithTax+" with tax.");











