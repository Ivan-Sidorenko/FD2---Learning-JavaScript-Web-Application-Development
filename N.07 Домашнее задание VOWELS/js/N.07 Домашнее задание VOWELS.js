"use strict";

function simpleStr() {
  const vowelSet="аеёиоуыэюя";

  var simpleString = prompt("Введите строку").toLowerCase().split('').reduce((sum, val) => {
    if (vowelSet.indexOf (val) !==-1) { 
      sum++;
    } return sum;
  }, 0); return simpleString;
};

alert ("Количество гласных: "+simpleStr());