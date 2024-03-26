let body = document.body,
    icon1 = document.getElementById('icon1'),
    icon2 = document.getElementById('icon2'), photo = document.getElementById('photo');


let aa = () => {
    body.style.cssText = 'background-image:url(./img/bg2.png);'
    photo.src = "./img/photo2.jpg"
    for (i = 1; i <= 6; i += 1) {
        document.getElementById(`box${i}`).className = 'xxx'
    }
}

let bb = () => {
    body.style.cssText = 'background-image:url(./img/bg1.png);'
    photo.src = "./img/photo1.jpg"
    for (i = 1; i <= 6; i += 1) {
        document.getElementById(`box${i}`).className = 'box'
    }
}


icon1.addEventListener('click', aa)
icon2.addEventListener('click', bb)
