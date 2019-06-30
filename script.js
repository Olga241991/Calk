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

function onActClick(action) {
    const curText = textBox.innerText;

    if (curText === '' || isOperationMode) {
        return;
    } 

    acc = +curText;
    operation = action;
    isOperationMode = true;
    textBox.innerText = action;
}

function onResultClick() {
    const curText = textBox.innerText;

    if (curText === '' || isOperationMode) {
        return;
    }

    switch (operation) {
        case '*':
            textBox.innerText = acc * +curText;
            break;
        case '/':
            textBox.innerText = acc / +curText;
            break;
        case '+':
            textBox.innerText = acc + +curText;
            break;
        case '-':
            textBox.innerText = acc - +curText;
            break;
    }

    operation = null;
}
