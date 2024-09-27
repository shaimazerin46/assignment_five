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
function switchingButtonContent(id){
    document.getElementById('donation_blog_content').classList.add('hidden');
    document.getElementById('history_section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
   

}
function activeButton(id){
    document.getElementById('donation_blog_btn').classList.remove('active');
    document.getElementById('history_section_btn').classList.remove('active');
    document.getElementById(id).classList.add('active')
}

