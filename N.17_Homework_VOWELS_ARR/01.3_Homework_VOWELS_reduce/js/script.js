"use strict";

var uString = prompt("Введите строку");

function countVowels(simpleString, stringVowel = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"]) {
  return simpleString
  .toLowerCase()
  .split("")
  .reduce((sum, symbol) => stringVowel.includes(symbol) ? sum += symbol : sum, "").length;
}

alert(countVowels(uString));