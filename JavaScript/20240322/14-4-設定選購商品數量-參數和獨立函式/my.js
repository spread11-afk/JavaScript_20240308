let x = 12
let num = document.getElementById('num')
let minus = document.getElementById('minus')
let add = document.getElementById('add')
let text = document.getElementById('text')


let aaa = () => {
    click(1)
    check()
}
let bbb = () => {
    click(-1)
    check()
}


let click = (i) => {
    x += i;
    num.innerHTML = x
}

let check = () => {
    if (x < 10) {
        text.innerHTML = ('購買愈多、折扣愈多')
    }
    else if (x >= 10 && x < 20) {
        text.innerHTML = ('打8折')
    }
    else {
        text.innerHTML = ('打5折')
    }
}

add.onclick = aaa;
minus.onclick = bbb;


// add.addEventListener('click',aaa);

// minus.onclick = aaa;
// add.onclick = bbb;







