"use strict";

var uString = prompt("Введите строку");

function countVowels(simpleString, stringVowel = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"]) {
  let count = [...simpleString].reduce((sum, symbol) => stringVowel.includes(symbol) ? sum + 1 : sum, 0);
  return count;
}

alert(countVowels(uString));