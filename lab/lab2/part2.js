/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */

//THIS IS FROM: part1-functions-are-values

var theArray = ['A short story.', 42, {'place': 'LA'}, 55, ['Another story'], 23, 12, 2, 4, 5, 6, 'bar', 'foo'];
var yourSum = 0;

_.each(theArray, function(arrayValue){
   if (typeof arrayValue === 'string') {         // String case
    yourSum = yourSum + arrayValue.length;
  } else if (typeof arrayValue === 'number') {  // Number case
    yourSum = yourSum + arrayValue;
  } else {                                      // Otherwise
    console.log("Not sure how to proceed with value:", arrayValue);
  }
});

  console.log("Success: ", yourSum === 169, "I think the value is:", yourSum);

//THIS IS FROM: part3-array-access

    var map = L.map('map', {
      center: [39.9522, -75.1639],
      zoom: 14
    });

    var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20,
      ext: 'png'
    }).addTo(map);

    /* =====================

    Start code

    ===================== */

    var restaurantData = [[39.960297, -75.168742, "Sabrinas"], [39.948433, -75.217884, "Vientienne"], [39.937115, -75.154476, "Royal Tavern"]];

    _.each(restaurantData, function(data){
        L.marker(data).addTo(map).bindPopup(data[2]).openPopup(data[2]);
    });
