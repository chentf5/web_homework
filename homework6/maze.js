var start = 0;
var firstx = 0;
var firsty = 0;
var one = 0;

var dx = 0;
var dy = 205;

window.onload = function() {

    var objectx = 0;
    var objecty = 200;
    //var start = 0;
    var object = document.getElementById('object');
    var s = document.getElementById('s');
    s.addEventListener("mousemove", show_coords);
    object.addEventListener("mousemove", move);
}

function move(event) {
    if (start) {
        //alert(event.clientX + ',' +event.clientY);
        var o = document.getElementById('object');
        var ev = event;
        console.log(ev.clientY);
        o.style.left = ev.clientX - (firstx - dx) + 'px';
        o.style.top = ev.clientY - (firsty - dy) + 'px';
        test(event);

    }
}

function show_coords(event) {
    if (one == 0) {
        firstx = event.clientX;
        firsty = event.clientY;
        //alert("X coords: " + firstx + ", Y coords: " + firsty);
        if (start == 0) {
            start = 1;
        }
        one = 1;
    }
}

function test(event) {
    var o = document.getElementById('object');
    var left = parseInt(o.style.left);
    var top = parseInt(o.style.top);
    if (left >= 0 || left <= 465) {
        if (top < -40 || top > 300) {
            cheat();
        }
    }
    if (left < -35) {
        //alert("呀！你的方块跑出游戏界面了");
    } else if (left >= -35 && left < 150) {
        if (left >= 0 && left <= 2 && top > 201 && top <= 215) {
            var p = document.getElementById('tip');
            p.innerHTML = "<p>Move your mouse over the 'S' to begin.<p>";
            p.style.color = 'black';
        }
        if (top > 215 || top < 200) {
            lose();
        }

    } else if (left >= 150 && left < 165) {
        if (top < 50 || top > 215) {
            lose();
        }

    } else if (left >= 165 && left < 300) {
        if (top < 50 || top > 65) {
            lose();
        }
    } else if (left >= 300 && left < 315) {
        if (top < 50 || top > 215) {
            lose();
        }
    } else if (left >= 315 && left < 465) {
        if (top < 200 || top > 215) {
            lose();
        }
    } else if (left >= 465 && left <= 500) {
        if (top >= 200 && top <= 215) {
            win();
        }
    } else {
        //alert("呀！你的方块跑出游戏界面了");
    }
}

function lose() {
    start = 0;
    var p = document.getElementById('tip');
    p.textContent = "You Lose!please try agian.";
    p.style.color = 'red';
    var c = document.getElementById('maze');
    c.style.background = 'red';
    var bu = document.getElementById('reset');
    bu.addEventListener('click', reset);
    bu.style.display = 'inline-block';
}

function reset() {

    var o = document.getElementById('object');
    object.style.left = -40 + 'px';
    object.style.top = 205 + 'px';
    var c = document.getElementById('maze');
    c.style.background = '#EEEEEE';
    var bu = document.getElementById('reset');
    bu.style.display = 'none';
    one = 0;
    dx = -40;
    dy = 205;
    var o = document.getElementById('object');
    o.style.background = 'green';
    var p = document.getElementById('s');
    s.textContent = 'S';
}

function win() {
    var p = document.getElementById('tip');
    p.textContent = "You win!!!!";
    p.style.color = 'red';
    var bu = document.getElementById('reset');
    bu.addEventListener('click', reset);
    bu.style.display = 'inline-block';
    start = 0;
    var o = document.getElementById('object');
    o.style.background = '#733fe2';
    var p = document.getElementById('s');
    s.textContent = 'E';
}

function cheat() {
    var p = document.getElementById('tip');
    p.textContent = "Don't cheat,you should start form the 'S' and move to the 'E' inside the maze!";
    p.style.color = 'red';
    var bu = document.getElementById('reset');
    bu.style.display = 'inline-block';
    bu.addEventListener('click', reset);
    start = 0;
}