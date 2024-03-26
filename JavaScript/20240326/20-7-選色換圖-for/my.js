let pic = document.querySelector('#pic'),
    tt = document.querySelector('#tt'),
    btn = document.querySelectorAll('button');

// let color = ['red', 'green', 'blue']

// let showImg = (n) => {
//     pic.src = `./img/${n}.jpg`
// }


// for (i = 0; i < btn.length; i += 1) {
//     btn[i].addEventListener('click', function () { showImg(color[i]) })
// }

for (let i = 0; i < btn.length; i += 1) {
    btn[i].onclick = function () { show(i) }
}

// let show = (n) => {
//     pic.src = `./img/${btn[n].value}.jpg`
// }

function show(n) {
    pic.src = `./img/${btn[n].value}.jpg`
}