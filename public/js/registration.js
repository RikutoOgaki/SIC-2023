const input = document.getElementById('telNumber');
const btn = document.getElementById('btn');
console.log(input, btn);
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

btn.addEventListener('click', () => {
    console.log('honnda');
})

// 関数を検知するイベント
input.addEventListener('keyup', InputTextCheck)


