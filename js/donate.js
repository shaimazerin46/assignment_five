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

    // add to history
    const history_sec = document.getElementById('history_section');
    const time = new Date();
    const div = document.createElement('div');
    
    div.innerHTML = `
     <p class="font-bold">${amount} Taka is Donated for Flood at Noakhali, Bangladesh</p>
        <p>Donation Time: ${time.toLocaleString()}</p>
    
    `
    div.classList.add('border-2', 'border-gray-200', 'p-5', 'mb-4');
    history_sec.appendChild(div);
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

     // add to history
    const history_sec = document.getElementById('history_section');
    const time = new Date();
    const div = document.createElement('div');
    
    div.innerHTML = `
     <p class="font-bold">${amount} Taka is Donated for Flood at Noakhali, Bangladesh</p>
        <p>Donation Time: ${time.toLocaleString()}</p>
    
    `
    div.classList.add('border-2', 'border-gray-200', 'p-5', 'mb-4');
    history_sec.appendChild(div);
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
    // add to history
    const history_sec = document.getElementById('history_section');
    const time = new Date();
    const div = document.createElement('div');
    
    div.innerHTML = `
     <p class="font-bold">${amount} Taka is Donated for Flood at Noakhali, Bangladesh</p>
        <p>Donation Time: ${time.toLocaleString()}</p>
    
    `
    div.classList.add('border-2', 'border-gray-200', 'p-5', 'mb-4');
    history_sec.appendChild(div);
});