let num1 = Number(prompt("Enter first number : "))
let op = prompt("Choose an operation +, -, *, / ")
let num2 = Number(prompt(("Enter second number : ")))
let result
if (op == "+"){
    let result = num1 + num2
    alert(result); 
} else if (op == "-"){
    let result = num1 - num2
    alert(result);
} else if (op == "*"){
    let result = num1 * num2
    alert(result);
} else if (op == "/"){
    let result = num1 / num2
    alert(result);
} else {
    alert("Enter a valid operation")
}




