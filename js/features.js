function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}
function getElementValueById(id){
    const totalAmount = document.getElementById(id).innerText;
    const totalAmountNumber = parseFloat(totalAmount);
    return totalAmountNumber;
}