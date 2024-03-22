let n = 1
let car = document.getElementById('car')

let change = () => {
    if (n < 6) {
        n += 1
    }
    else {
        n = 1
    }
    car.src = `./img/0${n}.jpg`
}
setInterval(change, 2000)
