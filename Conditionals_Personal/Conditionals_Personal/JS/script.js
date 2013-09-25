/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 9/23/13
 * Time: 9:58 PM
 * To change this template use File | Settings | File Templates.
 */

/* Carmine Trovato      09/24/2013       Conditionals Personal   */

/* This problem is */

var firstUser= "";          /* Result input Variable */
var secondUser="";          /* Result input Variable */
var firstPass="";           /* Result input Variable */
var secondPass = "";        /* Result input Variable */
var validMatch=false;       /* True False Variable */

/* This "do" "while" loop is set with a prompt and length,
 so that when the user enters an username it will verify that the user name is the correct length .
 While the valid length is "false" it prompts the user to re enter the username*/


do  {firstUser=prompt("Please Enter A UserName (min:6|max:12)");
    if(firstUser.length>=6 && firstUser.length<=12){
        validLength=true;}

    }while (validLength==false)   /* "While"   verifying the length from the "if" statement */

     secondUser=prompt("Please re-enter the UserName");

if(secondUser==firstUser)   /*  Verifies that the second UserName input is equal to the first UserName */

    {console.log("UserNames Match");
     validMatch=true;}

else {console.log("UserNames DO NOT Match");
}while (validMatch==false);

/* This "do" "while" loop is set with a prompt and length,
 so that when the user enters a password it will verify that the password is the correct length.
 While the valid length is "false" it prompts the user to re enter the password */

do  {firstPass = prompt("Please enter a Password (min:6|max:12)");
    if(firstPass.length>=6 && firstPass.length<=12){
        validLength=true;}

    }while (validLength==false);

     secondPass =prompt("Please re-enter the Password.") ;

if(secondPass==firstPass)   /*  Verifies that the second password input is equal to the first password */

     {console.log("They Match");
      validMatch=true;}

else {console.log("They Do Not Match");
}while (validMatch==false);





