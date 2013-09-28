/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 9/27/13
 * Time: 4:53 PM
 * To change this template use File | Settings | File Templates.
 */

//Carmine Trovato        09/27/2013           Functions: Industry

/*This problem will calculate if a customer is eligible for a discount based on ones age */
/* Console.log The Problems Title */
console.log("Are You Eligible For A Discount?");

/* variables are inserted by prompt */
var age= prompt('Year Born');
/* variable with age as a parseInt returning ageVariable as an integer  */
var ageVariable= 2013-parseInt(age);

/* This ageRange function will calculate IF the age prompted by the user is eligible for a discount
 based on the parameter of the ageVariable above */
function ageRange(ageVariable){
    if(ageVariable>=65){
        return "Senior Discount";     /* IF the age is greater than or equal to 65, it will return Senior Discount */
 }