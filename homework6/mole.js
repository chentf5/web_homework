window.onload = function() {
        var timestart = document.getElementById('start');
        timestart.addEventListener('click', control);
    }
    //计时器
var t;
var is_time_on = 0;

function timecount() {

    var time = document.getElementById('time');
    time.value--;
    if (time.value != 0)
        t = setTimeout(function() { timecount() }, 1000);
    else {
        stopCount();
        status = -status;
        var tip = document.getElementById('tip');
        tip.value = 'Game over.';
    }
}

function doTimer() {
    var time = document.getElementById('time');
    time.value = 31;
    if (!is_time_on) {
        timecount();
        is_time_on = 1;
    }
}

function stopCount() {
    clearTimeout(t);
    is_time_on = 0;
}
var status = -1;
var countscore = 0;
var p;
var x = 1;
var y = 1;
var isclick = 0;
function control() {
    var tip = document.getElementById('tip');
    status = -status; //取反
    if (status == 1) {
        //doplay();
        doTimer();
        doplay();
        tip.value = 'Playing';
        var s = document.getElementById('score');
        s.value = 0;
    } else {
        stopplay();
        stopCount();
        tip.value = 'Game over.';
        var k = document.getElementsByClassName('hole')[y].childNodes[x];
        k.style.backgroundColor = 'white';
    }
}


function playing() {
    isclick = 0;
    document.getElementById('array').style.backgroundColor = 'white';
    var px = x;
    var py = y;
    x = Math.ceil(Math.random() * 10);
    if (x == 10) x = 0;
    if (x == 9) x = 3;
    while (x == px) {
        x = Math.round(Math.random() * 10);
        if (x == 10) x = 0;
        if (x == 9) x = 3;
    }
    y = Math.ceil(Math.random() * 10);
    if (y >= 5) y = 1;
    while (y == py) {
        y = Math.round(Math.random() * 10);
        if (y >= 5) y = 1;

    }
    //var target1 = document.getElementById('array')[1];
    var target = document.getElementsByClassName('hole')[y].childNodes[x];
    //var target = document.getElementById('array');
    target.style.backgroundColor = 'black';
    target.addEventListener('click', ishit);
    if (document.getElementById('time').value != 0)
        p = setTimeout(function() { becomewhite() }, 2000);
    else stopplay();
}

function becomewhite() {
    if (isclick == 0) document.getElementById('score').value--;
    var target = document.getElementsByClassName('hole')[y].childNodes[x];
    target.style.backgroundColor = '#ffffff';
    playing();
}

function ishit() {
    var target = document.getElementsByClassName('hole')[y].childNodes[x];
    target.style.backgroundColor = '#ffffff';
    document.getElementById('score').value++;
    isclick = 1;
}

function doplay() {
    playing();
}

function stopplay() {
    clearTimeout(p);
    //k.backgroundColor = 'white';
}