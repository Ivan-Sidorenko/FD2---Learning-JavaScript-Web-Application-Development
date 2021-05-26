"use strict";

var form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    if (!devCheck() | !siteCheck() | !urlCheck() | !dateCheck() | !userNumCheck() | !emailCheck() | !catalogCheck() | !radioCheck() | !checkCheck() | !descCheck()) {
        focusMove();
        event.preventDefault();
    }
}, false);

function focusMove() {
    if (!devCheck()) {
        developer.focus();
    } else if (!siteCheck()) {
        webSite.focus();
    } else if (!urlCheck()) {
        webUrl.focus();
    } else if (!dateCheck()) {
        siteDate.focus();
    } else if (!userNumCheck()){
        usersNum.focus();
    } else if (!emailCheck()) {
        email.focus();
    } else if (!catalogCheck()) {
        catalog.focus();
    }  else if (!descCheck()) {
        desc.focus();
    }
}

var developer = document.getElementById("dev");
var developerErr = document.getElementById("devError");

developer.onblur = devCheck;
developer.onfocus = devReset;

function devCheck() {
    if (developer.value == "") {
        developer.classList.add("invalid");
        developerErr.innerHTML = "Заполните поле!";
        return false;
    } return true;
}

function devReset() {
    if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
        developerErr.innerHTML = "";
    }
}

var webSite = document.getElementById("siteName");
var siteErr = document.getElementById("siteNameError");

webSite.onblur = siteCheck;
webSite.onfocus = siteReset;

function siteCheck() {
    if (webSite.value == "") {
        webSite.classList.add("invalid");
        siteErr.innerHTML = "Заполните поле!";
        return false;
    } return true;
}

function siteReset() {
    if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
        siteErr.innerHTML = "";
    }
}

var webUrl = document.getElementById("siteUrl");
var urlErr = document.getElementById("siteUrlError");

webUrl.onblur = urlCheck;
webUrl.onfocus = urlReset;

function urlCheck() {
    if (!webUrl.value.includes(".")) {
        webUrl.classList.add("invalid");
        urlErr.innerHTML = "Заполните имя сайта! Например: https://www.google.com";
        return false;
    } return true;
}

function urlReset() {
    if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
        urlErr.innerHTML = "";
    }
}

var siteDate = document.getElementById("startDate");
var dateErr = document.getElementById("startDateError");

siteDate.onblur = dateCheck;
siteDate.onfocus = dateReset;

function dateCheck() {
    if (siteDate.value == "") {
        siteDate.classList.add("invalid");
        dateErr.innerHTML = "Необходимо выбрать дату запуска";
        return false;
    } return true;
}

function dateReset() {
    if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
        dateErr.innerHTML = "";
    }
}

var usersNum = document.getElementById("users");
var numErr = document.getElementById("usersError");

usersNum.onblur = userNumCheck;
usersNum.onfocus = userNumReset;

function userNumCheck() {
    if (usersNum.value == "") {
        usersNum.classList.add("invalid");
        userNumReset.innerHTML = "Заполните поле!";
        return false;
    } return true;
}

function userNumReset() {
    if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
        userNumReset.innerHTML = "";
    }
}

var email = document.getElementById("mail");
var emailErr = document.getElementById("mailError");

email.onblur = emailCheck;
email.onfocus = emailReset;

function emailCheck() {
    if (!email.value.includes("@")) {
        email.classList.add("invalid");
        emailErr.innerHTML = "Заполните почту! Например: user@google.com";
        return false;
    } return true;
}

function emailReset() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    emailErr.innerHTML = "";
  }
}

var catalog = document.getElementById("choise");
var catErr = document.getElementById("choiseError");

catalog.onblur = catalogCheck;
catalog.onfocus = catalogReset;

function catalogCheck() {
    if (catalog.value == "0") {
        catalog.classList.add("invalid");
        catErr.innerHTML = "Сделайте выбор из списка!";
        return false;
    } return true;
}

function catalogReset() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    catErr.innerHTML = "";
  }
}

var radioBut = document.getElementsByClassName("radio");
var radioErr = document.getElementById("radioError");

radioBut[0].onchange = radioReset;
radioBut[1].onchange = radioReset;
radioBut[2].onchange = radioReset;

function radioCheck() {
    if (radioBut[0].checked == false && radioBut[1].checked == false && radioBut[2].checked == false) { // Проверка на наличие выбора поля
        radioErr.innerHTML = "Отметьте тип размещения!";
        return false;
    } return true;
}

function radioReset() {
    for (let but of radioBut) {
        if (but.checked == true) {
        but.checked = true;
        radioErr.innerHTML = "";
        }
    }
}

var check = document.getElementById("check");
var checkErr = document.getElementById("checkError");

check.onchange = checkReset;

function checkCheck() {
    if(check.checked == false) {
        checkErr.innerHTML = "Отметьте галочкой разрешить отзывы";
        return false;
    } return true;
}

function checkReset() {
    if (check.checked == true) {
        checkErr.innerHTML = "";
    }
}

var desc = document.getElementById("description");
var descErr = document.getElementById("descriptionError");

desc.onblur = descCheck;
desc.onfocus = descReset;

function descCheck() {
    if (desc.value == "") {
        desc.classList.add("invalid");
        descErr.innerHTML = "Опишите!";
        return false;
    } return true;
}

function descReset() {
    if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
        descErr.innerHTML = "";
    }
}