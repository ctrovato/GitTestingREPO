
//Carmine Trovato       09/24/2013       Conditionals Wacky

/* This Problem Will find if we have enough Diplomas For Each Student */

/* Console.log the Problem Name  */
console.log("Do We Have Enough Diplomas??")

/* Variables of Students and Diplomas  prompted by user  */
var students = prompt ("How Many Students Are Graduating?");
var diplomas = prompt (" How Many Diplomas Do We Have.");

/* The "IF" conditional is finding out if there are more diplomas than students available.
 Which will console.log the following: */

if(students < diplomas){
    console.log("So Far, There Are More Diplomas Than There Are Students.");

    /* The "ELSE IF" conditional is finding out if there are more Students than Diplomas available.
     Which will console.log the following: */
}else if(students > diplomas){
    console.log(" WE NEED MORE DIPLOMAS !");

    /* What ever inputs are not related to the Conditionals stated above, then the following console.log will print: */
}else{console.log(" There Are Just Enough Diplomas For Each Of The Students."); }
