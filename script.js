let currentResult = 0;
let currentCalculation = "";
document.querySelector('#result').value = currentResult;
document.querySelector('#calculation').value = currentCalculation;

function nine() {
    currentCalculation = currentCalculation + "9";
    document.querySelector('#calculation').value = currentCalculation;
}
function eight() {
    currentCalculation = currentCalculation + "8";
    document.querySelector('#calculation').value = currentCalculation;
}
function seven() {
    currentCalculation = currentCalculation + "7";
    document.querySelector('#calculation').value = currentCalculation;
}
function six() {
    currentCalculation = currentCalculation + "6";
    document.querySelector('#calculation').value = currentCalculation;
}
function five() {
    currentCalculation = currentCalculation + "5";
    document.querySelector('#calculation').value = currentCalculation;
}
function four() {
    currentCalculation = currentCalculation + "4";
    document.querySelector('#calculation').value = currentCalculation;
}
function three() {
    currentCalculation = currentCalculation + "3";
    document.querySelector('#calculation').value = currentCalculation;
}
function two() {
    currentCalculation = currentCalculation + "2";
    document.querySelector('#calculation').value = currentCalculation;
}
function one() {
    currentCalculation = currentCalculation + "1";
    document.querySelector('#calculation').value = currentCalculation;
}

function zero() {
    if (currentCalculation.length === 0) {
        return currentCalculation;
    }
    currentCalculation = currentCalculation + "0";
    document.querySelector('#calculation').value = currentCalculation;
}

function decimal() {
    if (currentCalculation.length === 0) {
        currentCalculation = currentCalculation + "0";
    }
    currentCalculation = currentCalculation + ".";
    document.querySelector('#calculation').value = currentCalculation;
}

function plus() {
    if (currentCalculation.length === 0) {
        return currentCalculation;
    }
    currentCalculation = currentCalculation + "+";
    document.querySelector('#calculation').value = currentCalculation;
}
function minus() {
    if (currentCalculation.length === 0) {
        return currentCalculation;
    }
    currentCalculation = currentCalculation + "-";
    document.querySelector('#calculation').value = currentCalculation;
}

function multi() {
    if (currentCalculation.length === 0) {
        return currentCalculation;
    }
    currentCalculation = currentCalculation + "*";
    document.querySelector('#calculation').value = currentCalculation;
}

function devide() {
    if (currentCalculation.length === 0) {
        return currentCalculation;
    }
    currentCalculation = currentCalculation + "/";
    document.querySelector('#calculation').value = currentCalculation;
}

function ac() {
    currentResult = 0;
    currentCalculation = "";
    document.querySelector('#result').value = currentResult;
    document.querySelector('#calculation').value = currentCalculation;
}

function bs(){
    if (currentCalculation.length === 0) {
        return currentCalculation;
    }
    currentCalculation = currentCalculation.slice(0,-1)
    document.querySelector('#calculation').value = currentCalculation;

}

function equal(){
    if (currentCalculation.length === 0) {
        return currentCalculation;
    }
    currentCalculation = eval(currentCalculation);
    document.querySelector('#result').value = `= ${currentCalculation}`;
}