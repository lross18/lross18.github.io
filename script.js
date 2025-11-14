

const textBox = document.getElementById("textBox");

function appendText(input) {
    console.log("In append");
    textBox.value += input;
}

function calc() {
    textBox.value = eval(textBox.value);
}

function backSpace() {
    textBox.value = textBox.value.slice(0, -1);
}

function clearText() {
    textBox.value = "";
}