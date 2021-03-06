"use strict";

class HashStorageFunc { 
    arrContent = {};

    addValue = function(key, value) {
        this.arrContent[key] = value;
    }

    getValue = function(key) {
        return this.arrContent[key];
    }

    deleteValue = function(key) {
        if (key in this.arrContent) {
            delete this.arrContent[key];
            return true;
        } else {
            return false;
        }
    }

    getKeys = function() {
        var arrKeys = [];
        for (var key in this.arrContent) {
            arrKeys.push(key);
        } return arrKeys;
    }
}

var drinkStorage = new HashStorageFunc();

one.onclick = function() { //функция создает напиток/состав напитка/его рецепт и кладет его в память
    var drinkName = prompt("Введите наименования напитка (коктейля)");

    var alcohol = confirm("Если напиток содержит алкоголь нажмите \"Ок\", а если не содержит нажмите \"Отмена\"");
    if (alcohol == true) {
        var drinkAlcoholic = "да";
    } var drinkAlcoholic = "нет";

    var compround = prompt("Составьте напиток, например: 1. Лед; 2. Виски; 3. Кола; 4. Так далее; укажите необходимые компоненты");
    var recipe = prompt("Рецепт приготовления напитка, например: \n1. Насыпать в стакан лед; \n2. Поверх льда влить виски; \n3. Слегка промешать лед с виски; \n4. Добавить наверх колы");

    var objectDrink = {};
    objectDrink.drinkName = drinkName;
    objectDrink.drinkAlcoholic = drinkAlcoholic;
    objectDrink.compround = compround;
    objectDrink.recipe = recipe;

    drinkStorage.addValue(drinkName, objectDrink);
}

two.onclick = function() {//функция по запросу выводит информацию о напитке/составе напитка/его рецепте или сообщает что данный напиток отсутствует
    var drinkName = prompt("Введите наименования напитка (коктейля):");
    var information = drinkStorage.getValue(drinkName);

    if (information === undefined) {
        alert("Такой в баре отсутсвует!")
    } else {
        alert(`
        Напиток: ${information.drinkName}
        Алкогольный: ${information.drinkAlcoholic}
        Состав: ${information.compround}
        Рецепт приготовления: ${information.recipe}`);
    }
}

three.onclick = function() { //функция удаляет напиток из памяти или сообщает, что его там и небыло
    var drinkName = prompt("Введите наименования напитка (коктейля):");
    if (drinkStorage.deleteValue(drinkName)) {
        alert("Напиток удален из меню!");
    } else {
        alert("Такой в баре отсутсвует!");
    }
}

four.onclick = function() { //функция выводит библиотеку напитков
    var list = drinkStorage.getKeys();
    if (list.length == 0) {
        alert("Карта напитков пустая, нажмите: \"ВВОД ИНФОРМАЦИИ О НАПИТКЕ\", чтобы добавить напиток в меню");    
    } else alert("Добро пожаловать в бар, вашему вниманию карта напитков: " + list);
}