"use strict"

var uSurname = prompt("Введите вашу фамилию?");
var uName = prompt("Введите ваше имя?");
var uPatronymic = prompt("Введите ваше имя?");
var uAgeYear = +prompt("Введите ваш возраст?");
var uPensioner 

var uGender = confirm('Если вы мужчина, нажмите - "ОК", в противном случае - "Отмена"');

(uGender === true) ? uGender = "мужской" : uGender = "женский";

uGender === "мужской";

(uAgeYear < 62) ? uPensioner = "нет" : uPensioner = "да"

uGender === "женский";

(uAgeYear < 57) ? uPensioner = "нет" : uPensioner = "да"

alert(`ваше ФИО: ${uSurname.trim()} ${uName.trim()} ${uPatronymic.trim()}
ваш возраст в годах: ${uAgeYear}
ваш возраст в днях: ${uAgeYear * 365}
через 5 лет вам будет: ${uAgeYear + 5}
ваш пол: ${uGender}
вы на пенсии: ${uPensioner}`);