/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 9/25/13
 * Time: 5:23 PM
 * To change this template use File | Settings | File Templates.
 */
//
//
//var monthSalesData= [];
//monthSalesData[0]= 100
//monthSalesData[1]= 200
//monthSalesData[3]= 300
//
//

function saleAverage(salesArray){
    var returnValue = 0;
     for(i=1;1<salesArray.length;i++){
         returnValue+=salesArray[i];
}
        return returnValue/(salesArray.length-1);
}

function salesForecast(incPercent, currentAvgValue){
         return (1+incPercent) *currentAvgValue

}

function salesForecast(currentSalesValues,avgSales){
    return (currentSalesValues-avgSales)/avgSales;
}