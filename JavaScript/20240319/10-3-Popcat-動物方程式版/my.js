window.onload = function () {

    let pic = document.getElementById('pic')
    let tt = document.getElementById('tt')
    let autio = document.createElement('audio')
    let N = 0

    // pic.onmouseover = () => { pic.src = "./img/p2.png" }
    // pic.onmouseout = () => { pic.src = "./img/p1.png" }
    // pic.onmousedown = () => { pic.src = "./img/p3.png" }
    // pic.onmouseup = () => { pic.src = "./img/p2.png" }


    function aaa() { this.src = "./img/p2.png" }
    function bbb() { this.src = "./img/p1.png" }
    function ccc() {
        this.src = "./img/p3.png";
        N += 1;
        tt.innerHTML = N;
        playautio();
    }
    function playautio() {
        autio.src = "./a.mp3";
        autio.play();
    }


    pic.onmouseover = aaa
    pic.onmouseout = bbb
    pic.onmousedown = ccc
    pic.onmouseup = aaa

}



