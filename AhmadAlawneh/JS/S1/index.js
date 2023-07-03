const result = document.getElementById("result");
let answer = 0; // variable to store the answer

function dis(val) {
    result.value += val;
}

function evaluateExpression() {
    const expression = result.value;
    try {
        answer = eval(expression); // Evaluate the expression using JavaScript's eval() function
        result.value = answer; // Display the answer
} catch (error) {
        result.value = "Error"; // Display "Error" if there is an error in the expression
}
}

function clearResult() {
    result.value = "";
}