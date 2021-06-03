"use strict";

let uString = prompt("Введите строку на русском языке");

function countVowels(simpleString) {
  let stringVowel = {"а":true, "е":true, "ё":true, "и":true, "о":true, 
                     "у":true, "ы":true, "э":true, "ю":true, "я":true};
  
  let s = simpleString.toLowerCase().split("").filter(function(symbol) {
    return (symbol in stringVowel) 
  });
  return s.length;
}

alert(countVowels(uString));