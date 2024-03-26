let big = document.querySelector('#pic'),
    small = document.querySelectorAll('#BOX img');




// for (let i = 0; i < small.length; i++) {
//     small[i].addEventListener('click', function () { aaa(i) });
// }


small.forEach((a, b) => {
    a.onclick = () => { aaa(b) }
})


function aaa(n) {
    n += 1
    big.src = `./img/00${n}.jpg`
}
