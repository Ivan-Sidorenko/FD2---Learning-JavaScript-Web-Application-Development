"use strict";

one.onclick = function createForm() {
    addHtml(formDef1);
}

two.onclick = function createForm() {
    addHtml(formDef2);
}

function addHtml(addCodeBlockHtml) {
    var addCodeBlockHtml;

    var str="";
        str+="<div>";
        for ( var i = 0; i < addCodeBlockHtml.length; i++ ) {
          if (addCodeBlockHtml[i].kind === "longtext") {
            str+="<label>" + addCodeBlockHtml[i].label + "</label><input id='longtext' name='" + addCodeBlockHtml[i].name + "'></input><br>";
          } else if (addCodeBlockHtml[i].kind === "number") {
            str+="<label>" + addCodeBlockHtml[i].label + "</label><input id='number' type='number' name='" + addCodeBlockHtml[i].name + "'></input><br>";
          } else if (addCodeBlockHtml[i].kind === "shorttext") {
            str+="<label>" + addCodeBlockHtml[i].label + "</label><input id='shorttext' name='" + addCodeBlockHtml[i].name + "'></input><br>";
          } else if (addCodeBlockHtml[i].kind === "check") {
            str+="<label>" + addCodeBlockHtml[i].label + "</label><input id='check' type='checkbox' name='" + addCodeBlockHtml[i].name + "'></input><br>";
          } else if (addCodeBlockHtml[i].kind === "memo") {
            str+="<label>" + addCodeBlockHtml[i].label + "</label><br><textarea id='memo' name='" + addCodeBlockHtml[i].name + "'></textarea><br>";
          } else if (addCodeBlockHtml[i].kind === "submit") {
            str+="<button>" + addCodeBlockHtml[i].label + "</button>";
          } else if (addCodeBlockHtml[i].kind === "combo") {
            str+="<label>" + addCodeBlockHtml[i].label + "</label><select id='combo' name='" + addCodeBlockHtml[i].name + "'>"
            for (var j = 0; j < addCodeBlockHtml[i].variants.length; j++) {
              str+="<option value='" + addCodeBlockHtml[i].variants[j].value + "'>" + addCodeBlockHtml[i].variants[j].text + "</option>";
            }
            str+="</select><br>"
          } else if (addCodeBlockHtml[i].kind === "radio") {
            str+="<label>" + addCodeBlockHtml[i].label + "</label>";
            for (var j = 0; j < addCodeBlockHtml[i].variants.length; j++) {
              str+="<input id='radio' type='radio' name='" + addCodeBlockHtml[i].name + "' value='" + addCodeBlockHtml[i].variants[j].value + "'>" + addCodeBlockHtml[i].variants[j].text + "</option>";
            }
            str += "<br>";
          }
    }

    str+="</div>";

    var contElem=document.getElementById('forms');
    contElem.innerHTML=str;
    console.log(contElem.innerHTML);
}

var formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {label:'Опубликовать:',kind:'submit'},
];

var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {label:'Зарегистрироваться:',kind:'submit'},
];