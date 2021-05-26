"use strict";

function randomDiap(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
    var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];

console.log( 'цветов: ' + colorsCount );
    var arrayColors = {};
    
    for ( var i = 1; i <= colorsCount; i++ ) {
        var n = randomDiap(1, 7);
        
        if (colors[n] in arrayColors) i--;
        
        else console.log(arrayColors[colors[n]] = colors[n]);
    }
}

mood(3);