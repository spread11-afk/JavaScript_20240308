let iconL = document.getElementById('iconL')
let iconM = document.getElementById('iconM')
let iconS = document.getElementById('iconS')
let tt = document.getElementById('tt')

iconL.addEventListener('click', aaa)
iconM.addEventListener('click', bbb)
iconS.addEventListener('click', ccc)


function aaa(e) {
    tt.style.fontSize = '32px'
    e.preventDefault()
}

function bbb(e) {
    tt.style.fontSize = '16px'
    e.preventDefault()
}

function ccc(e) {
    tt.style.fontSize = '8px'
    e.preventDefault()
}




// let ss = setInterval(aa, 2000)

// let aa = () => { }