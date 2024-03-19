let pic = document.getElementById('pic')


// pic.onmouseover = () => { pic.src = "./img/p2.png" }
// pic.onmouseout = () => { pic.src = "./img/p1.png" }
// pic.onmousedown = () => { pic.src = "./img/p3.png" }
// pic.onmouseup = () => { pic.src = "./img/p2.png" }


pic.onmouseover = aaa
pic.onmouseout = bbb
pic.onmousedown = ccc
pic.onmouseup = aaa
function aaa() { this.src = "./img/p2.png" }
function bbb() { this.src = "./img/p1.png" }
function ccc() { this.src = "./img/p3.png" }


