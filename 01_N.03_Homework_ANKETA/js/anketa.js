"use strict"

do {
    var yourSurname = prompt("Введите вашу фамилию");
} while (!yourSurname);

do {
    var yourName = prompt("Введите ваше имя");
} while (!yourName);

do {
    var yourPatronymic = prompt("Введите ваше отчество");
} while (!yourPatronymic);

do {
    var yourAgeYear = +prompt("Укажите ваш возвраст"); //знак (+) преобразовывает строку в число по принципу Number(значение)
} while (!yourAgeYear);

var yourGender = confirm("Если вы мужчина нажмите \"ОК\", а если вы женщина нажмите \"Отмена\"");
var yourPensioner;

if (yourGender === true) {
    yourGender = "мужчина"
    if (yourAgeYear < 61) {
        yourPensioner = "нет";
    } else yourPensioner = "да";
} else {
    yourGender = "женщина";
    if (yourAgeYear < 56) {
        yourPensioner = "нет";
    } else yourPensioner = "да";
}

alert(`ваше ФИО: ${yourSurname.trim()} ${yourName.trim()} ${yourPatronymic.trim()}
ваш возраст в годах: ${yourAgeYear}
ваш возраст в днях: ${yourAgeYear * 365}
через 5 лет вам будет: ${yourAgeYear + 5}
ваш пол: ${yourGender}
вы на пенсии: ${yourPensioner}`);