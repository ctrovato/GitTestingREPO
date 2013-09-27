/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 9/25/13
 * Time: 5:23 PM
 * To change this template use File | Settings | File Templates.
 */



var agePrompt= prompt('Year Born');

var ageVariable= 2013-parseInt(agePrompt);

function ageRange(){
    if(ageVariable>65){
        return "Senior Discount";
    }else if(ageVariable<6){
        return "Child Discount";
    }else{
        return "No Discount Available";
    }
}

if(agePrompt==''){
    console.log('Please enter user name to continue');

}else if(agePrompt== ''){
    console.log('Please enter the year you born');
}

