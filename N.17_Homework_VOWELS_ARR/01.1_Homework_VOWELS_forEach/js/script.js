"use strict";

let uString = prompt("Введите строку на русском языке");

function countVowels(simpleString) {
  let stringVowel = {"а":true, "е":true, "ё":true, "и":true, "о":true,  // также можно указать массивом: 
                     "у":true, "ы":true, "э":true, "ю":true, "я":true}; // var stringVowel = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
  let counter = 0;
  let s = simpleString.toLowerCase().split("");
  s.forEach(function(symbol) {
    if (symbol in stringVowel) {
      counter++;
    }
  });
  return counter;
}

alert(countVowels(uString));