// submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
   

    const passwordField =  document.getElementById('user-password');
    const pw = passwordField.value;
    // console.log(email, pw);


    if(email === 'asif@gmail.com' && pw === 'password'){
        window.location.href = 'bank.html'
    }
    else{
        alert('invalid user')
    }
})