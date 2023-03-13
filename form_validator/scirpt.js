const form = document.getElementById('form');
const username = document.getElementById("username")
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirm = document.getElementById('confrim')

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className='form-control error';
    const small = formControl.querySelector('small');
    small.innerText= message
}
function showSucess(input){
    const formControl = input.parentElement;
    formControl.className='form-control valid';
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(username.value === ''){
        showError(username,'username is required')
    }
    
    else{
        showSucess(username);
    }
    if(email.value === ''){
        showError(email,'email is required')
    }
    
    else{
        showSucess(email);
    }
    if(password.value === ''){
      showError(password,'password is required')
    }
    
    else{
      showSucess(password);
    }
    if(confirmation.value === ''){
      showError(confirmation,'confirmation password is required')
    }
    
    else{
      showSucess(confirmation);
    }
})
