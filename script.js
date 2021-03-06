var input = document.getElementById('input');
var small = document.getElementById('small');
var operat = ['^', '=', '×', '÷', '−', '+'];

function clr() {
    input.value = '';
    small.value = '';
}

function del() {
    input.value = input.value.slice(0, (input.value.length-1))
}

function num(x) {
    input.value += x;
}

function dec(x) {
    if((input.value == '') || ((input.value[0] == '+' || input.value[0] == '−' || input.value[0] == '×' || input.value[0] == '÷' || input.value[0] == '^') && input.value.length == 1)) {
        input.value += '0'+x;
    }
    if(!(input.value.includes('.'))){
        input.value += x;
    }
}

function zero(x) {
    if(!(input.value == '')){
        input.value += x;
    }
}

//============================= Operators Function ===========================

function oprt(x) {
    if((input.value[0] == '+' || input.value[0] == '−' || input.value[0] == '×' || input.value[0] == '÷' || input.value[0] == '^') && input.value.length == 1){
        input.value = x;
    }
    else if(input.value[0] == '+' || input.value[0] == '−' || input.value[0] == '×' || input.value[0] == '÷' || input.value[0] == '^') {
        var a = Number(small.value);
        var b = Number(input.value.slice(1, input.value.length));
            if     (input.value[0] == '+') {small.value = a+b}
            else if(input.value[0] == '−') {small.value = a-b}
            else if(input.value[0] == '×') {small.value = a*b}
            else if(input.value[0] == '÷') {small.value = a/b}
            else if(input.value[0] == '^') {small.value = a**b}
            else{};
        input.value = x;
    }else if(input.value == '' && small.value == '') {input.value = ''}
    else if(input.value == '') {input.value += x;}
    else{
        small.value = input.value;
        input.value = x;
    }
}

//========================== Equal Function ====================================

function sum() {
    if((input.value[0] == '+' || input.value[0] == '−' || input.value[0] == '×' || input.value[0] == '÷' || input.value[0] == '^') && input.value.length == 1){
        input.value = small.value;
    }
    else if(input.value[0] == '+' || input.value[0] == '−' || input.value[0] == '×' || input.value[0] == '÷' || input.value[0] == '^') {
        var a = Number(small.value);
        var b = Number(input.value.slice(1, input.value.length));
        var result = '';
            if     (input.value[0] == '+') {result = a+b; small.value = a + ' + ' + b}
            else if(input.value[0] == '−') {result = a-b; small.value = a + ' − ' +b}
            else if(input.value[0] == '×') {result = a*b; small.value = a + ' × ' +b}
            else if(input.value[0] == '÷') {result = a/b; small.value = a + ' ÷ ' +b}
            else if(input.value[0] == '^') {result = a**b; small.value = a + ' ^ ' +b}
            else{};
        input.value = result;
    }
    else{small.value = input.value}
}

//=========================== Calculator Done ========================================