"use strict"

var uSurname = prompt("Введите вашу фамилию?");
var uName = prompt("Введите ваше имя?");
var uPatronymic = prompt("Введите ваше имя?");
var uAgeYear = +prompt("Введите ваш возраст?");
var uGender = confirm("Если вы мужчина нажмите кнопку \"Ок\", а если женщина, то кнопку \"Отмена\"");
var uPensioner

if (uGender === true) {
    uGender = "мужской"
    if (uAgeYear < 62) {
        uPensioner = "нет"
    } else uPensioner = "да"
} else {uGender = "женский"
    if (uAgeYear < 57) {
        uPensioner = "нет"
    } else uPensioner = "да"
}

alert(`ваше ФИО: ${uSurname.trim()} ${uName.trim()} ${uPatronymic.trim()}
ваш возраст в годах: ${uAgeYear}
ваш возраст в днях: ${uAgeYear * 365}
через 5 лет вам будет: ${uAgeYear + 5}
ваш пол: ${uGender}
вы на пенсии: ${uPensioner}`);