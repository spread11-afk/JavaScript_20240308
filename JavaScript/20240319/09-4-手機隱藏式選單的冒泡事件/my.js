let icon = document.getElementById('icon'),
    menu = document.getElementById('menu'),
    body = document.body;


icon.onclick = (e) => {
    menu.style.display = 'block';//顯示
    e.stopPropagation();
}
body.onclick = () => {
    menu.style.display = 'none'//消失
}





