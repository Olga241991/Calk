const textBox = document.getElementById('text');
let acc;
let operation;
let isOperationMode = false;

function onDigitClick(digit) {
    if (isOperationMode) {
        isOperationMode = false;
        textBox.innerText = '';
    }

    if (textBox.innerText === '0') {
        if (digit === 0) {
            return;
        } else {
            textBox.innerText = '';
        }
    }

    textBox.innerText += digit;
}


function onDotClick() {
    const curText = textBox.innerText;

    if (curText.length === 0 || curText.indexOf('.') !== -1 || isOperationMode) {
        return;
    }

    textBox.innerText += '.';
}


function onDelete() {
    textBox.innerText = '';
    isOperationMode = false;
}


function onMultiplyClick() {
    const curText = textBox.innerText;

    if (curText === '' || isOperationMode) {
        return;
    }

    acc = +curText;
    operation = '*';
    isOperationMode = true;
    textBox.innerText = '×';
}

function onResultClick() {
    const curText = textBox.innerText;

    if (curText === '' || isOperationMode) {
        return;
    }

    switch (operation) {
        case '*':
            textBox.innerText = acc * +curText;
            operation = null;
            break;
    }
}
