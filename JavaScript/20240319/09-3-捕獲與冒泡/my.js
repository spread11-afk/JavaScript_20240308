let grandpa = document.getElementById('grandpa'),
    father = document.getElementById('father'),
    child = document.getElementById('child'),
    bb = document.getElementById('bb');

grandpa.onclick = (e) => {
    grandpa.style.backgroundColor = 'rgb(255, 0, 0)';
    e.stopPropagation();
    // 停止傳播(冒泡)
}
father.onclick = (e) => {
    father.style.backgroundColor = 'antiquewhite'
    e.stopPropagation();
    // 停止傳播(冒泡)
}
child.onclick = (e) => {
    child.style.backgroundColor = 'rgb(136, 255, 84)'
    e.stopPropagation();
    // 停止傳播(冒泡)
}
bb.onclick = (e) => {
    bb.style.backgroundColor = 'rgb(84, 112, 255)'
    e.stopPropagation();
    // 停止傳播(冒泡)
}



