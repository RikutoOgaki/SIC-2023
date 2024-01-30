const inputs = document.querySelectorAll('.inText');
console.log(inputs);

function setNextFocus(obj) {
    if (obj.value.length >= obj.maxLength) {
        var textinput = document.codeNumber.elements;
        // ループでinputのカウント
        for (var i = 0; i < textinput.length; i++) {
            if (textinput[i] == obj) {
                textinput[i + 1].focus();
                // 繰り返し処理を終了
                break;
            }
        }
    }
}

function Test() {
    console.log('発火');
    setTimeout(function () {
        window.location.href = '../completion.html'
    }, 3000)
}