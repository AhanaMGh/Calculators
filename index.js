const display = document.getElementById("display");

function append(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calc(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}
