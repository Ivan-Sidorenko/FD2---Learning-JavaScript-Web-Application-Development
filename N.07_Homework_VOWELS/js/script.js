"use strict";

var uString = prompt("Введите произвольный текст на русском языке").toLowerCase().split('');

function countVowels(str) {
    var vCount = 0;
  
    var string = str.toString();
  
    for (var i = 0; i <= string.length - 1; i++) {
  
      if (string.charAt(i) == "а" || string.charAt(i) == "е" || 
      string.charAt(i) == "ё" || string.charAt(i) == "и" || 
      string.charAt(i) == "о" || string.charAt(i) == "у" ||
      string.charAt(i) == "ы" || string.charAt(i) == "э" ||
      string.charAt(i) == "ю" || string.charAt(i) == "я") {
        vCount += 1;
      }
    }
    return vCount;
  }

alert(countVowels(uString));