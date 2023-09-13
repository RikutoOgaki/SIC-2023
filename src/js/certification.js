const inputs = document.querySelectorAll('.inText');
console.log(inputs);

function setNubmer(ele) {
    if (ele.value.length === ele.max)
        for (i = 0; i < inputs.length; i++) {
            if (inputs[i].value.length === 1) {
                inputs[i + 1].focus();
                break
            }
        }
}


