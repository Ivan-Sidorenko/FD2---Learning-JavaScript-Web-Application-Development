"use strict";

do {
    var wthatIsYourSurname = prompt("Ваша фамилия?"); //Фамилия
} while (!wthatIsYourSurname || !wthatIsYourSurname.trim());

do {
    var wthatIsYourName = prompt("Ваше имя?"); //Имя
} while (!wthatIsYourName || !wthatIsYourName.trim());

do {
    var wthatIsYourPatronymic = prompt("Ваше отчество?"); //Отчество
} while (!wthatIsYourPatronymic || !wthatIsYourPatronymic.trim());
var wthatIsYourFullName = wthatIsYourSurname + " " + wthatIsYourName + " " + wthatIsYourPatronymic; //ФИО

do {
    var wthatIsYourAge = Number(prompt("Сколько вам лет?")); //Возраст в годах
} while (!wthatIsYourAge);

var yourAge = parseInt(wthatIsYourAge) //Перевод строки в число
var oneYear = 365; //Год в днях
var yourAgeInDays = oneYear * yourAge; //Возраст в днях
var inFiveYears = 5 + yourAge; //Возраст через 5 лет
var notWorking; //Пенсионер
var yourGenderDimension; //Половой признак
var wthatIsYourGenderDimension = confirm("Если вы мужчина, нажмите - 'ОК', в противном случае - 'Отмена'");

if (wthatIsYourGenderDimension > 0) {
    yourGenderDimension = "Мужской";
    if (yourAge > 61)
        notWorking = "Да";
    else
        notWorking = "Нет";
} else {
    yourGenderDimension = "Женский";
    if (yourAge > 56)
        var notWorking = "Да";
    else
        notWorking = "Нет";
    }

alert(`ваше ФИО: ${wthatIsYourFullName}
ваш возраст в годах: ${yourAge}
ваш возраст в днях: ${yourAgeInDays}
через 5 лет вам будет: ${inFiveYears}
ваш пол: ${yourGenderDimension}
вы на пенсии: ${notWorking}`);