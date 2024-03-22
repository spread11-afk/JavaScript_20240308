let pic = document.getElementById('pic')
let tt = document.getElementById('tt')
let icon1 = document.getElementById('icon1')
let icon2 = document.getElementById('icon2')

icon1.addEventListener('click', () => aaa(1, '芥末綠'))
icon2.addEventListener('click', () => aaa(2, '珊瑚粉'))



let aaa = (x, y) => {
    pic.src = `./img/g0${x}.jpg`
    tt.innerHTML = y
}