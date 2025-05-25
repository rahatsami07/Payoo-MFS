document.getElementById('cash-out-btn')
.addEventListener('click', function(event){
    event.preventDefault();

    const cashOutInput = document.getElementById('input-cash-out').value;

    
    //  const cashOutNumber = parseFloat(cashOutInput);
    
    const cashOutPin = document.getElementById('input-cash-out-pin').value;
    const cashOutNumber = parseFloat(cashOutInput);
     if(cashOutPin === "4742"){

        const currentBalance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(currentBalance);


        const newBalance = balanceNumber - cashOutNumber;
     

        document.getElementById('account-balance').innerText = newBalance;
     }
     else {
        alert('failed cash out! please try again.')
     }
})

console.log('cash out file connected')