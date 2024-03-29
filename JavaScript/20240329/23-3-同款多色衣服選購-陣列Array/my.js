let list = ['杏色', '粉色', '灰色', '咖啡', '軍綠'],
    icon = document.querySelectorAll('.icon'),
    tt = document.getElementById('tt'),
    pic = document.getElementById('pic')

let aa = (n) => {
    pic.src = `./img/cc${n}.jpg`
    tt.innerHTML = list[n]
}


icon.forEach((a, b) => {
    a.onclick = () => { aa(b) }
})

