// let aaa = '5'

function aaa() {
    let pic = document.getElementById('pic')
    pic.src = "./img/kiwi2.jpg"
}

// aaa()

let click = document.getElementById('click')
click.onclick = aaa;
setTimeout(aaa, 2000);
