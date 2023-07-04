function multiply() {
    let firstNumber = document.getElementById("first-number").value;
    let secondNumber = document.getElementById("second-number").value;
    if(firstNumber==""||secondNumber=="" ){
        alert("enter the both numbers ")
    }else{
        let result = parseFloat(firstNumber.match(/\d+(\.\d+)?/)) * parseFloat(secondNumber.match(/\d+(\.\d+)?/));
        let display = document.getElementById("display1");
        display.textContent = result;
        return result;
    }

}

function divide() {
    let firstNumber = document.getElementById("first-number").value;
    let secondNumber = document.getElementById("second-number").value;
    if(firstNumber==""||secondNumber=="" ){
        alert("enter the both numbers ")
    }else{
        let result =parseFloat(firstNumber.match(/\d+(\.\d+)?/)) / parseFloat(secondNumber.match(/\d+(\.\d+)?/));
    let display = document.getElementById("display1");
    display.textContent = result;
    return result;
    }
}

function convert(){
    let Celsius = document.getElementById("celsius-degree");
    let fahrenheit = document.getElementById("fahrenheit-degree");
    if(fahrenheit.value==""){
    fahrenheit.value = parseFloat(Celsius.value.match(/\d+(\.\d+)?/))* 1.8 + 32 ;
    document.getElementById("display2").innerHTML=`${ Celsius.value} is  °C ${fahrenheit.value}°F `
}
else{(Celsius.value=="") 
    Celsius.value =(parseFloat(fahrenheit.value.match(/\d+(\.\d+)?/))- 32 )/ 1.8;
    document.getElementById("display2").innerHTML=` ${fahrenheit.value}°F is    ${ Celsius.value}°C `
}
}
