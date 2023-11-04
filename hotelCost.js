//node hotelCost.js//

function hotelCost(day){
    var sty = 0;
    if(day <= 10){
        sty = day * 100;
    }
    else if (day <= 20){
        var firstday = 10 *50;
        var runing = day - 10;
        var secondday = runing *80;
        sty = firstday + secondday;
}
    else{
        var firstday = 10 * 100;
        var secondday = 10 * 80;
        var runing = day - 20;
        var thireday = runing * 50;
        sty = firstday + secondday + thireday;
    }
    return sty;
}
var count = hotelCost(30)
console.log(count);