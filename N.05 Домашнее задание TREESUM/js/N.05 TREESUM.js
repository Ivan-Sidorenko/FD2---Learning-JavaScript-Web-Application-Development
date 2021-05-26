"use strict";

var arrTreesum = [ 5, 7, 
  [ 4, [2], 8, [1,3], 2 ], 
  [ 9, [] ], 
  1, 8
];

function sum(arrayElement) {                      
if(arrayElement instanceof Array) {             
  return arrayElement.reduce(function(arraySum, arrayElement) {   
    return arraySum + sum(arrayElement);
  }, 0);
}
else                                 
  return arrayElement;
}

console.log(sum(arrTreesum));