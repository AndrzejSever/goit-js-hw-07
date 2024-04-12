
const stopReloading = document.querySelector('.login-form');

stopReloading.addEventListener('submit', defaultPrevent )

function defaultPrevent() {
    event.preventDefault();


    const emailInput = document.querySelector('input[name="email"]');
    
    const passwordInput = document.querySelector('input[name="password"]');
  
    
     if (emailInput.value === '' || passwordInput.value === '') {
        alert('Будь ласка, заповніть усі поля');
        return ;
    }


        
    const formInput = {
      email: emailInput.value,
      password: passwordInput.value
    };

    console.log(formInput)

   this.reset();

    return ;
}