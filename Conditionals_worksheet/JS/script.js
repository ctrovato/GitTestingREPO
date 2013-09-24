/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 9/18/13
 * Time: 11:40 PM
 * To change this template use File | Settings | File Templates.
 */
/*
Carmine Trovato
September 18th, 2013
CONDITIONALS WORKSHEET */

//__________Group One_______________

// ________Last Chance for Gas!______
/* A driver has to determine if they can make it across the desert with their current fuel.
They are about to past the last gas station for the next 200 miles and they need to determine
whether they should stop now for gas or not.   */

console.log("Last Chance for Gas!")

var milesPerGallon=36;
var percentOfGas= .50;

var tankCapacity= 10; /* Tank capacity in gallons */

//gas left in tank
var actualGallons= (percentOfGas*tankCapacity);

if( percentOfGas>=.50){
    console.log("Yes you can make it without gas!");}

    else{
        console.log("You only have "+actualGallons+" gallons of gas in your tank, better get gas now while you can! ");
}

/* Space */
console.log("")



//__________Group Two______________

// ________Letter Grade Calculator______
/* A student earns a number grade at the conclusion of a course at Full Sail.
  Determine the appropriate letter grade for that number using conditional statements.*/
//
console.log("Letter Grade Calculator");
var studentGrade=prompt("PLEASE ENTER YOUR GRADE PERCENTAGE");
var letter= "";

if(studentGrade>=95) {
    letter = "A+"
}else if(studentGrade>=90){
    letter="A"
} else if(studentGrade>=85){
    letter="B+"
} else if(studentGrade>=80){
    letter="B"
} else if(studentGrade>=76){
    letter="C+"
} else if(studentGrade>=73){
    letter="C"
} else if(studentGrade>=70){
    letter="D"
} else{
    letter="F"
}

console.log("You have a " + studentGrade + "%, which means you have earned a(n) " + letter +" in the class.");

/*Space*/
console.log("")


//__________Group Three______________

// ________Movie Ticket Price______
/* The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older),
under 10 you get the discounted price of $7.00. In addition,
if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
Determine which of the two prices the customer is eligible for.*/

console.log("Movie Ticket Price.")
var time=6;
var age=prompt("PLEASE ENTER YOUR AGE BELOW");
var ticketPrice= "";

if(age>=55 ||  age<=10 ||  time>=3 && time<=3){
    ticketPrice="7.00"
} else{
    ticketPrice="12.00"
}

console.log("The ticket price is $"+ticketPrice+".");




