/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 9/18/13
 * Time: 5:21 PM
 * To change this template use File | Settings | File Templates.
 */

document.querySelector("body").style.backgroundColor="#CCFF00";


//__________LAND TYPE GENERATOR___________



function landSelection(){
    var initValue= Math.random()*10;
    // console.log(initValue);
    var percentChange = Math.floor(initValue);
    // console.log(percentChange);

    var woods=0;
    var jungle=1;
    var swamp=2;
    var desert=3;
    var mountains=4;
    var dungeons=5;
    var hills=6;
    var tundra=7;
    var wasteland=8;
    var city=9;
    var  returnLandType;

    if(percentChange ==woods)
    {returnLandType= 'woods'}
    else if(percentChange == jungle)
    {returnLandType= 'jungle'}
    else if (percentChange==swamp){
        returnLandType= 'swamp'}
    else if (percentChange==desert){
        returnLandType= 'desert'}
    else if (percentChange==mountains){
        returnLandType= 'mountains'}
    else if (percentChange==dungeons){
        returnLandType= 'dungeons'}
    else if (percentChange==hills){
        returnLandType= 'hills'}
    else if (percentChange==tundra){
        returnLandType= 'tundra'}
    else if (percentChange==wasteland){
        returnLandType= 'wasteland'}
    else if (percentChange==city){
        returnLandType= 'city'}
    return returnLandType;
}

function tabGen (len){
    if(len>7){
        return '\t';
    } else if (len>3){
        return '\t\t';
    } else if (len <=3){
        return '\t\t\t';
    }
}

//console.log(landSelection());

var world = [];
for(j=0;j<10;j++){

    world[j]=[];
    for(i=0;i<10;i++){
        world[j][i]=landSelection();


    }
}
var worldPresentationString ='';
for(outer=0;outer<10;outer++){
    worldPresentationString ='';
    for(inner=0;inner<10;inner++){
        worldPresentationString+=world[outer][inner];
        worldPresentationString+=tabGen(world[outer][inner].length);
    }
    console.log(worldPresentationString);


}

//__________GPA EXAMPLE________

//var gpa=48;
//if(gpa>=2.0){
//    console.log("YOU CAN GRADUATE");
//}else{(gpa<1.9)
//    console.log("YOU CAN'T GRADUATE DUMB ASS");
//}
////____OPTIONAL CONDITIONAL STATEMENT________
//
//(gpa > 2.0) ? console.log("YOU CAN GRADUATE") : console.log("YOU CAN'T GRADUATE DUMB ASS");


// ____________AGE / BOOK EXAMPLE__________

//var age=9;
//var book;
//
//if(age<10){
//    book="Green EGGs n' HAM"
//}else if(age>=11){
//    book= "The Time Machine"
//}
////_____________________________
//book= (age < 10 ) ? "Green EGGs n' HAM"  : " The Time  Machine";
//console.log(book);





