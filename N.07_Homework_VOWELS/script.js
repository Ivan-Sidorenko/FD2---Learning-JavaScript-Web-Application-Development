"use strict";

let uString = prompt("Введите строку на русском языке");

function countVowels(simple) {
  let s = simple.toLowerCase();
  let counter = 0;
  const stringVowel = "аеёиоуыэюя";
  for (let i = 0; i < s.length; i++) {
    let symbol = s[i];
    if (stringVowel.indexOf(symbol) != -1) 
    counter++;
  }
  return counter;
}

alert(countVowels(uString));