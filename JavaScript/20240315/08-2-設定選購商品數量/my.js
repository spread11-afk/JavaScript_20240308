let x = 12
let num = document.getElementById('num')
let minus = document.getElementById('minus')
let add = document.getElementById('add')
let minus10 = document.getElementById('minus10')
let add10 = document.getElementById('add10')

let aaa = () => {
    x += 1;
    num.innerHTML = x
}
let bbb = () => {
    x -= 1;
    num.innerHTML = x
}
let aaa10 = () => {
    x += 10;
    num.innerHTML = x
}
let bbb10 = () => {
    x -= 10;
    num.innerHTML = x
}


// add.addEventListener('click',aaa);
add.onclick = aaa;
minus.onclick = bbb;
add10.onclick = aaa10;
minus10.onclick = bbb10;



// minus.onclick = aaa;
// add.onclick = bbb;


