"use strict";

var simpleString = prompt("Введите строку");

function countVowels(text) {
  var vowelSet={"а":true, "е":true, "ё":true, 
                "и":true, "о":true, "у":true, 
                "ы":true, "э":true, "ю":true, "я":true};
  
  var sS = text.toLowerCase().split("").filter(function(matchCheck){
    return (matchCheck in vowelSet)
  }); 
  return sS.length;
}

alert ("Количество гласных: "+countVowels(simpleString));