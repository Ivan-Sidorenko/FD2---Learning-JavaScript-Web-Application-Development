"use strict"

var arr = [ 5, 7, 
    [ 4, [2], 8, [1,3], 2 ], 
    [ 9, [] ], 
    1, 8
  ]
  
function treeSum(arrElem) {
    if (arrElem instanceof Array) {
        return arrElem.reduce(function(arrSum, arrElem) {
            return arrSum + treeSum(arrElem);
        }, 0)
    }
    else
        return arrElem;
}

alert(treeSum(arr));