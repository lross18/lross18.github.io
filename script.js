

const textBox = document.getElementById("textBox");

function appendText(input) {
    console.log("In append");
    textBox.value += input;
}

function calc() {
    try {
        textBox.value = eval(textBox.value);
    } catch (error) {
        clearText();
        appendText("Err")
    }
}

function backSpace() {
    textBox.value = textBox.value.slice(0, -1);
}

function clearText() {
    textBox.value = "";
}