// let x = prompt('請輸入')
// let y = prompt('請再輸入')

// x = parseInt(x)
// y = parseInt(y)

let x = parseFloat(prompt('請輸入'))
let y = parseFloat(prompt('請再輸入'))

let z = x + y
z.toFixed(1)
document.getElementById('tt').innerHTML = z

console.log(x)
console.log(typeof x)
console.log(y)
console.log(typeof y)

