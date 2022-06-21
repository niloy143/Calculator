var result = document.getElementsByTagName('input')[0]
var small = document.getElementById('small')
function num(x) {
    result.value += x;
}

function clr() {
    result.value = '';
    small.innerHTML = '0';
}

function del() {
    result.value = result.value.slice(0, (result.value.length-1))
}

function sum() {
    if (result.value == '') {
        alert('Enter some value')
    } else {
    try{
    small.innerHTML = result.value;
    for(var i=0; i<result.value.length; i++){
        if(result.value[i] == '−'){
            result.value = result.value.replace('−', '-');
        }else if(result.value[i] == '×') {
            result.value = result.value.replace('×', '*');
        }else if(result.value[i] == '÷') {
            result.value = result.value.replace('÷', '/');
        }else if(result.value[i] == '^') {
            result.value = result.value.replace('^', '**');
        }
    }
    result.value = eval(result.value)
    }catch{
        alert('Invalid Value');
        small.innerHTML='0';
        result.value = '';
    }
}
}

