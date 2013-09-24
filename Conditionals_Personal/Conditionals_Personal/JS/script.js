/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 9/23/13
 * Time: 9:58 PM
 * To change this template use File | Settings | File Templates.
 */


var firstPass="";
var secondPass = "";
var firstUser= "";
var secondUser="";
var validLength=false
var validMatch=false;

do{
    firstUser=prompt("Please Enter A UserName (min:8|max:12)");
    if(firstUser.length>=8 && firstUser.length<=12){
        validLength=true;}
}
    while (validLength==false)

    secondUser=prompt("Please re-enter the UserName");

if(secondUser==firstUser)
{
    console.log("They Match");
    validMatch=true;
}

else {console.log("They Do Not Match");


