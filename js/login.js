document.getElementById('login-btn').addEventListener('click', function(event){
    // prevent reload page
    event.preventDefault(); 
    // get phone number and pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin').value;
    
    // bad way to validate!!!!!!!!!!
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged In');
        // way to 
        window.location.href ='/home.html'
    }
    else{
        alert('wrong number or pin')
    }
})