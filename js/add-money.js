/**
 * S-1: add an event handler to the add money btn inside the form
 * event.preventDefault();
 * S-2: get money to be added to account
 * get the pin number provider
 * S-3: verify the pin number.  for wrong pin number ===> failed to add
 *  for right pin number ===> allow to add the number to the account balance
 * 
 * S-4:  get the current balance
 * 
 * S-5: add money to be added with the current balance
 * 
 * S-6: display the new balance in the UI/DOM
 */

//  S-1: add an event handler to the add money btn inside the form
document.getElementById('add-money-btn').addEventListener('click', function(event){
    //  event.preventDefault();
    event.preventDefault();
    // S-2:  get money to be added to account;
    const addMoneyInput= document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoneyInput);

    // get the pin number provider
    const addPinInput = document.getElementById('input-pin-number').value;
    
    // verify the pin number.
    if(addPinInput === "4742"){

        // S-4:  get the current balance
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber= parseFloat(balance);

        // S-5: add money to be added with the current balance
        const updatedBalance = balanceNumber + addMoneyNumber;

        // S-6: display the new balance in the UI/DOM
        document.getElementById('account-balance').innerText = updatedBalance;
        
    }
    else{
        alert('failed to add money! please try again.')
    }



})