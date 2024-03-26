for (let i = 1; i <= 5; i += 1) {
    document.getElementById(`menu${i}`).addEventListener('mouseover', function () { aa(i) })
    document.getElementById(`menu${i}`).addEventListener('mouseout', function () { bb(i) })
}


let aa = (n) => {
    document.getElementById(`submenu${n}`).style.cssText = 'display:block;'
}

let bb = (n) => {
    document.getElementById(`submenu${n}`).style.cssText = 'display:none;'
}