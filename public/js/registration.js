const input = document.getElementById('telNumber');
const btn = document.getElementById('btn');
const errar = document.querySelector('.errar');
console.log(input, btn, errar);
console.log(input.value);

// 何が入力されたかを検知する関数
function InputTextCheck() {
    let inputText = input.value
    console.log(inputText);

    let inputTextNum = inputText.length

    if (inputTextNum <= 0) {
        btn.disabled = true
        btn.style.backgroundColor = '#6A769A'
    }
    else if (inputTextNum >= 0) {
        btn.disabled = false
        btn.style.backgroundColor = '#264CB5'
        btn.style.color = '#ffffff'
    }
    else {
        btn.disabled = true
        btn.style.backgroundColor = '#6A769A'
    }
}

// 電話番号の入力が正しいかを確認する関数
function WatchTel() {
    console.log('発火');
    let telNum = input.value
    if (telNum.length < 11) {
        errar.classList.add('errarOn')
    }
    else if (telNum.length === 11) {
        btn.setAttribute('onclick', "location.href='./certification.html'")
    }
    else {
        errar.classList.add = 'errarOn'
    }
}

// 関数を検知するイベント
input.addEventListener('keyup', InputTextCheck)

btn.addEventListener('click', WatchTel)

