let n = 1,
    tt = setInterval(aaa, 2000),
    box = document.getElementById('box'),
    car = document.getElementById('car'),
    iconL = document.getElementById('iconL'),
    iconR = document.getElementById('iconR');


function aaa() {
    if (n < 6) {
        n += 1
    }
    else {
        n = 1
    }
    car.src = `./img/0${n}.jpg`
}

box.onmouseover = stop
box.onmouseout = start

let start = () => {
    tt=setInterval(aaa, 2000)
}

let stop = () => {
    clearInterval(tt)
}

iconR.onclick = aaa
iconL.onclick = goL

let goL = () => {
    if (n > 1) {
        n -= 1
    }
    else {
        n = 6
    }
    car.src = `./img/0${n}.jpg`
}