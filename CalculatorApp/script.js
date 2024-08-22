const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value = display.value + input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
       display.value = parseFloat(eval(display.value)).toFixed(2);
    } catch (erorr) {
        display.value = "Error";
    }
}