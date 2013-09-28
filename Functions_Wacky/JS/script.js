/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 9/27/13
 * Time: 9:50 PM
 * To change this template use File | Settings | File Templates.
 */

//Carmine Trovato        09/27/2013           Functions: Wacky

/* This problem is Converting Miles To Kilometers */
/* Title console.log */
console.log("HOW MANY KILOMETERS IS IT?");

/* "Miles" Variables Prompt by users */
var miles=prompt("HOW MANY MILES?");

/* Kilometers variable parseInt specifying "miles" returning as an integer*/
var kilometers=parseInt(miles);

/* the milesKilometers Function with "kilometers" as a parameter.
 Parameter(number of miles divided by 0.62137) */

function milesKilometers(kilometers){
    var kilometers=miles/0.62137;
    return kilometers;
}

/* console.log will print the output of the function milesKilometers with the kilometers Parameter(number of miles divided by 0.62137)   */
milesKilometers(kilometers);
console.log(milesKilometers(kilometers)+" Kilometers");
