var expression = "";
var resul;
var showedExpression = "";

// Enter a number
function enterKey(key) {
    if (expression.toString().slice(-1) == "+" || expression.toString().slice(-1) == "-" || expression.toString().slice(-1) == "*" || expression.toString().slice(-1) == "/") {
        showedExpression = key;
        expression += key;
    } else {
        expression += key;
        showedExpression += key; 
    }
    document.querySelector('.display').value = showedExpression;
}

// Key "=" is pressed
function result() {
    if (expression == "" && showedExpression == "") {
        resul = 0;
    } else {
    resul = eval(expression);
    }
    document.querySelector('.display').value = resul;
}

// Key "C" Clear all
function clean() {
    resul = 0;
    expression = "";
    showedExpression = "";
    document.querySelector('.display').value = 0;
}

// If +, -, / or * is pressed
 function enterKeySpecial(special) {
    expression += special;
}

// square root
 function sqrt() {
    expression = Math.sqrt(eval(expression));
    showedExpression = expression;
    document.querySelector('.display').value = showedExpression;
}