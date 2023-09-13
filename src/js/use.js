const useBoxs = document.querySelectorAll('.content');
const pages = document.querySelectorAll('.spn');
const befor = document.getElementById('befo');
const after = document.getElementById('aft');
const btn = document.getElementById('btn')

console.log(useBoxs, befor, after, pages, btn);

let num = 0

befor.addEventListener('click', Befor)

after.addEventListener('click', After)


// 次の画面に行く関数
function After() {
    let subnum;
    if (num < useBoxs.length - 1) {
        subnum = num + 1
    } else {
        subnum = 0
    }
    useBoxs[subnum].style.display = 'flex'
    useBoxs[num].style.display = 'none'
    pages[num].classList.remove('now')
    pages[subnum].classList.add('now')
    num = subnum

    if (subnum === 1) {
        befor.style.opacity = '1'
    }
    else if (subnum === 2) {
        after.style.opacity = '0'
        btn.setAttribute('onclick', "location.href='./top.html'")
        btn.style.backgroundColor = '#264CB5'
    }
    else {
        btn.style.backgroundColor = '#D4DEF9'
    }
}

// 前の画面に行く関数
function Befor() {
    let subnum;
    if (num > 0) {
        subnum = num - 1
    }
    else {
        subnum = useBoxs.length - 1
    }

    useBoxs[subnum].style.display = 'flex'
    useBoxs[num].style.display = 'none'
    pages[num].classList.remove('now')
    pages[subnum].classList.add('now')
    num = subnum

    if (subnum === 1) {
        after.style.opacity = '1'
        btn.style.backgroundColor = '#D4DEF9'
    }
    else if (subnum === 0) {
        befor.style.opacity = '0'
        btn.style.backgroundColor = '#D4DEF9'
    }
    else {
        btn.style.backgroundColor = '#D4DEF9'
    }
}