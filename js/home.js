/**
 * S-1: add an event handler to the add money btn inside the form
 * event.preventDefault();
 * S-2: get money to be added to account
 * 
 */

//  S-1: add an event handler to the add money btn inside the form
document.getElementById('add-money-btn').addEventListener('click', function(event){
    //  event.preventDefault();
    event.preventDefault();
    // S-2:  get money to be added to account;
    const addMoneyInput= document.getElementById('input-add-money').value;

    // get the pin number provider
    const addPinInput = document.getElementById('input-pin-number').value;

    console.log(addMoneyInput,addPinInput)



})