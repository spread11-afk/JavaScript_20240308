let page = document.getElementById('page'),
    img = document.getElementById('img'),
    btn = document.getElementById('btn');


let aa = () => {
    page.className = 'tag'
    img.className = 'tag-selected'
    btn.value = '圖片搜尋'
}

let bb = () => {
    page.className = 'tag-selected'
    img.className = 'tag'
    btn.value = '網頁搜尋'
}

img.addEventListener('click', aa)
page.addEventListener('click', bb)