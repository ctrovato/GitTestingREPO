/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 9/24/13
 * Time: 10:36 PM
 * To change this template use File | Settings | File Templates.
 */


/*   Carmine Trovato      09/24/2013        Conditionals Industry  */

/* This Problem will calculate if there is enough shopping carts for customers  */

console.log("Do We Have Enough Shopping Carts??")
/* Variables are input by the user: The number of shopping carts,
 and The number of Customers */
var customers = prompt ("How Many Customers Are There?");
var shoppingCarts = prompt (" How Many Shopping Carts Do We Have.")

/* This "IF" conditional will compare the number of shopping carts to the number of customers */
if(shoppingCarts >= customers){
    console.log("So Far, There Is Enough Shopping Carts For The Customers");

/* This "ELSE" conditional will output the console.log string if there are more shopping carts than customers */

