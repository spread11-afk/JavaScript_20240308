// window.onload = function () { }
let cake = document.getElementById('cake')
let N = 1;

cake.onclick = plus1

function plus1() {
    N += 1;
    // cake.src = "./img/photo" + N + ".jpg";
    cake.src = `./img/photo${N}.jpg`;  //新寫法
}

function plus1() {
    if (N < 6) { N += 1; }
    else { N = 1 }
    // this.src = "./img/photo" + N + ".jpg";
    this.src = `./img/photo${N}.jpg`;  //新寫法
}
