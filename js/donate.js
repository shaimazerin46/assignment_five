// donatation process for noakhali

document.getElementById('noakhali_btn').addEventListener('click',function(event){
    event.preventDefault();
    const myAmount = getElementValueById('my_balance');
  const amount =   getInputValueById('donate_input_field_n');
  const totalAmount = getElementValueById('amount_after_donation_n');
  if(isNaN(amount)){
    alert('Invalid donation input');
    return;
  }
 
  if(myAmount<amount){
    alert('Not enough balance to donate');
    return;
  }
  
  const newAmount = totalAmount + amount;
  document.getElementById('amount_after_donation_n').innerText = newAmount;
  
  const newMyAmount = myAmount - amount;
  document.getElementById('my_balance').innerText = newMyAmount;
//   alert('donation done');
const modal = document.getElementById('my_modal_5');
    modal.showModal();
});

// donation process for fenni
document.getElementById('fenni_btn').addEventListener('click',function(event){
    event.preventDefault();
    const myAmount = getElementValueById('my_balance');
  const amount =   getInputValueById('donate_input_field_fenni');
  const totalAmount = getElementValueById('amount_after_donation_f');
  if(isNaN(amount)){
    alert('Invalid donation input');
    return;
  }
 
  if(myAmount<amount){
    alert('Not enough balance to donate');
    return;
  }
  
  const newAmount = totalAmount + amount;
  document.getElementById('amount_after_donation_f').innerText = newAmount;
  
  const newMyAmount = myAmount - amount;
  document.getElementById('my_balance').innerText = newMyAmount;
//   alert('donation done');
const modal = document.getElementById('my_modal_5');
    modal.showModal();
});

// donation for quota movement

document.getElementById('quota_btn').addEventListener('click',function(event){
    event.preventDefault();
    const myAmount = getElementValueById('my_balance');
  const amount =   getInputValueById('donation_input_field_quota');
  const totalAmount = getElementValueById('amount_after_donation_q');
  if(isNaN(amount)){
    alert('Invalid donation input');
    return;
  }
 
  if(myAmount<amount){
    alert('Not enough balance to donate');
    return;
  }
  
  const newAmount = totalAmount + amount;
  document.getElementById('amount_after_donation_q').innerText = newAmount;
  
  const newMyAmount = myAmount - amount;
  document.getElementById('my_balance').innerText = newMyAmount;
//   alert('donation done');
const modal = document.getElementById('my_modal_5');
    modal.showModal();
});