function cal(){  
var opr1 = document.getElementById('first').value;
var opr2 = document.getElementById('second').value;
var operator = document.getElementById('operator').value

if(operator =='+'){
    var result = parseInt(opr1) +parseInt(opr2);
}

if(operator =='-'){
    var result = parseInt(opr1) - parseInt(opr2);
}

if(operator =='*'){
    var result = parseInt(opr1) * parseInt(opr2);
}

if(operator =='%'){
    var result = parseInt(opr1) % parseInt(opr2);
}

if(operator =='/'){
    var result = parseInt(opr1) / arseInt(opr2);
}


document.getElementById('result').value = result;


}