"user strict"

let diameter = 470;
let canvas = document.createElement('CANVAS');
canvas.width = diameter;
canvas.height = diameter;
canvas.style.position = 'absolute';
canvas.style.left = '550px';
let context = canvas.getContext('2d');
document.getElementById('container').append(canvas);
var radius = diameter / 2;
context.translate(radius, radius);
radius = radius * 0.90;
updateTime()
setTimeout(updateTime, 1020);

function updateTime() {
    createClockBackground(context);
    createNumCircles(context, radius);
    var currTime = new Date();
    var time = str0l(currTime.getHours(), 2) + ':' + str0l(currTime.getMinutes(), 2) + ':' + str0l(currTime.getSeconds(), 2);
    createWatch(context, radius, time);
    arrowHourMovement(currTime.getHours(), currTime.getMinutes());
    arrowMinuteMovement(currTime.getMinutes(), currTime.getSeconds());
    arrowSecondMovement(currTime.getSeconds());
    setTimeout(updateTime, 1020 - currTime.getMilliseconds());
}

function str0l(val,len) {
    var strVal=val.toString();
    while ( strVal.length < len )
        strVal='0'+strVal;
    return strVal;
}

function createClockBackground() {
    var clockArea = context;
    clockArea.beginPath();
    clockArea.arc(0, 0, diameter * 0.45, 0, 2 * Math.PI);
    clockArea.fillStyle = '#FCCA66';
    clockArea.fill();
    clockArea.strokeStyle = '#FCCA66';
    clockArea.lineWidth = diameter / 2 * 0.01;
    clockArea.stroke();

    return clockArea;
}

function createNumCircles(context, radius) {
  var numberArea = context;
  var numberAreaRadius = (diameter / 2) / 8;
  var ang;
    for (i = 0; i < 13; i++) {
        numberArea.beginPath();
        ang = i * Math.PI / 6;
        numberArea.arc(numberAreaCenterX, numberAreaCenterY, numberAreaRadius, 0, 2 * Math.PI);
        numberArea.rotate(ang);
        numberArea.translate(0, -diameter * 0.4);
        numberArea.rotate(-ang);
        numberArea.rotate(ang);
        numberArea.translate(0, diameter * 0.4);
        numberArea.rotate(-ang);
        numberArea.fillStyle = '#48B382';
        numberArea.stroke();
        numberArea.fill();
        var numberAreaCenterX = 0 + diameter * 0.45 * Math.sin(ang) * 0.8;
        var numberAreaCenterY = 0 - diameter * 0.45 * Math.cos(ang) * 0.8;
    }

    var number = context;
    number.font = radius * 0.15 + 'px times';
    number.textBaseline = 'middle';
    number.textAlign = 'center';
    for (i = 1; i < 13; i++) {
        ang = i * Math.PI / 6;
        number.rotate(ang);
        number.translate(0, -diameter * 0.36);
        number.rotate(-ang);
        number.fillStyle = '#2B2A29';
        number.fillText(i.toString(), 0, 0);
        number.rotate(ang);
        number.translate(0, diameter * 0.36);
        number.rotate(-ang);
    }
}

function createWatch(context, diameter, time) {
    var timeAreaX = 0;
    var timeAreaY = 0 - diameter * 0.4;
    var timeArea = context;
    timeArea.fillStyle = '#FCCA66';
    timeArea.fillRect(timeAreaX - diameter * 0.3, timeAreaY * 1.2, diameter * 0.6, diameter * 0.15);
    timeArea.save();
    timeArea.font = diameter * 0.15 + 'px times';
    timeArea.textBaseline = 'middle';
    timeArea.textAlign = 'center';
    timeArea.fillStyle = '#2B2A29';
    timeArea.fillText(time, timeAreaX, timeAreaY);
}

function createClockHands(context, pos, length, width) {
    context.beginPath();
    context.lineWidth = width;
    context.lineCap = 'round';
    context.moveTo(0, 0);
    context.rotate(pos);
    context.lineTo(0, -length);
    context.fillStyle = '#2B2A29';
    context.stroke();
    context.rotate(-pos);
}

function arrowHourMovement(nowHour, currentMinute) {
    var arrowHour = nowHour % 12;
    arrowHour = (arrowHour * Math.PI / 6) + (currentMinute * Math.PI / (6 * 60));
    var arrowHourLength = diameter * 0.3;
    var arrowHourWidth = diameter * 0.03;
    context.strokeStyle = '#2B2A29';
    createClockHands(context, arrowHour, arrowHourLength, arrowHourWidth);
}

function arrowMinuteMovement(nowMinute, nowSecond) {
    var arrowMinute = (nowMinute * Math.PI / 30) + (nowSecond * Math.PI / (30 * 60));
    var arrowMinuteLength = diameter * 0.4;
    var arrowMinuteWidth = diameter * 0.015;
    context.strokeStyle = '#2B2A29';
    createClockHands(context, arrowMinute, arrowMinuteLength, arrowMinuteWidth);
}

function arrowSecondMovement(nowSecond) {
    var arrowSecond = (nowSecond * Math.PI / 30);
    var arrowSecondLength = (diameter / 2.3);
    var arrowSecondWidth = diameter * 0.007;
    context.strokeStyle = '#2B2A29';
    createClockHands(context, arrowSecond, arrowSecondLength, arrowSecondWidth);
}