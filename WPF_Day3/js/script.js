/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 9/15/13
 * Time: 9:14 AM
 * To change this template use File | Settings | File Templates.
 */

//var numberVariable=10+"";
//var stringvariable='happy';
//var otherNumberVariable=15
//
//var concatVariable = numberVariable*1 + otherNumberVariable;
//console.log(concatVariable)

//  GAME
//var hitPoints=0;
//var result ="0";
//
//if (hitPoints<=0){
// result="your dead";}
//
//else{
//    result="your alive"
//}
//console.log("result");

//  ARRAYS
//var studentName= ["mike","joe","matt","mark"];
//console.log= (studentName[2]);
//
//
//
//var newArray = [''];
//newArray[0]='mike';
//newArray[1]='joe';
//newArray[2]='matt';
//newArray[3]='mark';
//
//
//console.log(newArray=1);

//ARRAY IN ARRAY
//var newArray = [];
//newArray[0]=['pear','apple','grape'];
//newArray[1]=['bat','cat','rat','frog'];
//newArray[2]=['Joe','Sae','Apollo','Starbuck','Malik'];
//
//console.log(newArray[0][2]);
//newArray[3]=[];
//newArray[3][0]="Monkey";
//
//console.log(newArray[3][0]);


//   LOOPING ARRAY
//var loopingArray=[];
//for(i=0;     /*initial variable & Value*/
//    i<=10;   /*number of times to do loop*/
//    i++){    /*what to do in the initial value after the loop is done*/
//
//
////    Stuff to be done
//    console.log(i);
//    loopingArray[i]=[];
//    loopingArray[i][0]='pos '+ i;
//
//    console.log(loopingArray [i][0]);
//}

//    LOOPING ARRAY WITH PROMPT
//var loopingArray=[];
//for(i=0;     /*initial variable & Value*/
//    i<=0;   /*number of times to do loop*/
//    i++){    /*what to do in the initial value after the loop is done*/
//
//var promptValue= parseInt(prompt('How many loops'));
//for (ipromptValue;i>0;i--){
//    console.log(i)
//}
//
////    Stuff to be done
//    console.log(i);
//    loopingArray[i]=[];
//    loopingArray[i][10]='pos '+ i;
//
//    console.log(loopingArray [i][10]);
//}

// MATH RANDOM

//console.log(Math.random())
//
//jamaican 35%, japan 35%, burger 10%, duck 20%

var foodType;
var randomValue= Math.random();
var Jamaican=.35;
var Japan=.7;
var Burger=.8;
var Duck=1;

if(randomValue> Jamaican){foodType="Jamaican"}
else if(randomValue>Burger){foodType="Japan"}
else if(randomValue> Jamaican){foodType="Burger"}
else{foodType="Duck"}

console.log(foodType);
console.log(randomValue);









