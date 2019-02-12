"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Paige Mabbitt
   Date: 2.12.19  

*/
runClock();
setInterval("runClock()", 1000);
//Actual clock function
function runClock() {
    //Sets thisTime to a time
    var thisTime = new Date();
    var dateStr = thisTime.toLocaleDateString();
    var timeStr = thisTime.toLocaleTimeString();
    //sets timeStr to thisTime
    var timeStr = thisTime.toLocaleString();
    // elements with id timestamp are set equal to timeStr
    document.getElementById("timeStamp").innerHTML = timeStr;
    //Determine hours and month using timeStr
    var thisHour = thisTime.getHours();
    var thisMonth = thisTime.getMonth();
    // Determin map number using the month and hours
    var mapNum = (2 * thisMonth + thisHour) % 24;
    // set a variable to a html element for insertion
    var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
    // insert var imgStr after "planisphere" element
    document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);
}