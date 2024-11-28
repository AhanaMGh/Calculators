const display = document.getElementById("display");

function append(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calc(){
    try{
        let expression = display.value.replace(/%/g, "*0.01*");
        expression = expression.replace(/\^/g, "**");
        display.value = eval(expression);
    }
    catch(error){
        display.value = "Error";
    }
}

function backspace() {
    display.value = display.value.substring(0,display.value.length-1)
}
