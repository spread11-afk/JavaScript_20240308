
// document.getElementById("pic1").onmouseover = aaa;
// document.getElementById("pic2").onmouseover = aaa;
// document.getElementById("pic3").onmouseover = aaa;
// document.getElementById("pic4").onmouseover = aaa;
// document.getElementById("pic5").onmouseover = aaa;
// document.getElementById("pic6").onmouseover = aaa;
// document.getElementById("pic7").onmouseover = aaa;
// document.getElementById("pic8").onmouseover = aaa;
// document.getElementById("pic9").onmouseover = aaa;


// document.getElementById("pic1").onmouseout = bbb;
// document.getElementById("pic2").onmouseout = bbb;
// document.getElementById("pic3").onmouseout = bbb;
// document.getElementById("pic4").onmouseout = bbb;
// document.getElementById("pic5").onmouseout = bbb;
// document.getElementById("pic6").onmouseout = bbb;
// document.getElementById("pic7").onmouseout = bbb;
// document.getElementById("pic8").onmouseout = bbb;
// document.getElementById("pic9").onmouseout = bbb;


// function aaa() {

//     // if (this.id == "pic1") { this.src = "./img/ice01-1.jpg" }
//     // if (this.id == "pic2") { this.src = "./img/ice02-1.jpg" }
//     // if (this.id == "pic3") { this.src = "./img/ice03-1.jpg" }
//     // if (this.id == "pic4") { this.src = "./img/ice04-1.jpg" }
//     // if (this.id == "pic5") { this.src = "./img/ice05-1.jpg" }
//     // if (this.id == "pic6") { this.src = "./img/ice06-1.jpg" }
//     // if (this.id == "pic7") { this.src = "./img/ice07-1.jpg" }
//     // if (this.id == "pic8") { this.src = "./img/ice08-1.jpg" }
//     // if (this.id == "pic9") { this.src = "./img/ice09-1.jpg" }

// }


// function bbb() {
//     for (i = 1; i <= 9; i += 1) {
//         document.getElementById(`pic${i}`).onmouseover = bbb;
//     }
//     if (this.id == "pic1") { this.src = "./img/ice01.jpg" }
//     if (this.id == "pic2") { this.src = "./img/ice02.jpg" }
//     if (this.id == "pic3") { this.src = "./img/ice03.jpg" }
//     if (this.id == "pic4") { this.src = "./img/ice04.jpg" }
//     if (this.id == "pic5") { this.src = "./img/ice05.jpg" }
//     if (this.id == "pic6") { this.src = "./img/ice06.jpg" }
//     if (this.id == "pic7") { this.src = "./img/ice07.jpg" }
//     if (this.id == "pic8") { this.src = "./img/ice08.jpg" }
//     if (this.id == "pic9") { this.src = "./img/ice09.jpg" }

// }

for (i = 1; i <= 9; i += 1) {
    document.getElementById(`pic${i}`).onmouseover = aaa;
    document.getElementById(`pic${i}`).onmouseout = bbb;
}

function aaa() {
    for (i = 1; i <= 9; i += 1) {
        if (this.id == `pic${i}`) {
            this.src = `./img/ice0${i}-1.jpg`
        }
    }
}

function bbb() {
    for (i = 1; i <= 9; i += 1) {
        if (this.id == `pic${i}`) {
            this.src = `./img/ice0${i}.jpg`
        }
    }
}