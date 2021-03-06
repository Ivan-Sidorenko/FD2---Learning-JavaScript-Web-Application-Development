"use strict";

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];

    console.log( 'цветов: ' + colorsCount );

    var hashColors = {};

    for ( var i=1; i<=colorsCount; i++ ) {
        do {
            var n=randomDiap(1,7);
            var name = colors[n];
        } while (name in hashColors) 
            hashColors[name] = true;

        var colorName = name;
        console.log( colorName );
    }
}

mood(3);