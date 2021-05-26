"use strict";

var simpleString = prompt("Введите строку");

function countVowels(text) {
  var vowelSet={"а":true, "е":true, "ё":true, 
                "и":true, "о":true, "у":true, 
                "ы":true, "э":true, "ю":true, "я":true};

  var sS = text.toLowerCase().split("").reduce(function(sum, value) {
    if(value in vowelSet)
      sum++;
      return sum;
  }, 0); return sS;
}

alert ("Количество гласных: "+countVowels(simpleString));