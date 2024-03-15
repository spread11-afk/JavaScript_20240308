let icon1 = document.getElementById('icon1')
let icon2 = document.getElementById('icon2')


// function change() {
//     let pic = document.getElementById('pic');
//     pic.src = "./img/g01.jpg";
//     let tt = document.getElementById('tt');
//     tt.innerHTML = '芥末綠'

// }

// function change1() {
//     let pic = document.getElementById('pic');
//     pic.src = "./img/g02.jpg";
//     let tt = document.getElementById('tt');
//     tt.innerHTML = '櫻花粉'

// }

let change = () => {
    let pic = document.getElementById('pic');
    pic.src = "./img/g01.jpg";
    let tt = document.getElementById('tt');
    tt.innerHTML = '芥末綠'
};

let change1 = () => {
    let pic = document.getElementById('pic');
    pic.src = "./img/g02.jpg";
    let tt = document.getElementById('tt');
    tt.innerHTML = '櫻花粉'
};

icon1.onclick = change;
icon2.onclick = change1;