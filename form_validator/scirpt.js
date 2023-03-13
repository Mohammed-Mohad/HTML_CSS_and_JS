const form = document.getElementById('form');
const username = document.getElementById("username")
const email = document.getElementById('email')
const password = document.getElementById('password')
const pass2 = document.getElementById('password2')

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

function checkRequired(intputArr){
    intputArr.forEach((input)=>{
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`);
        }
        else {
            showSucess(input);
        }
    })
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkRequired([username,email,password,pass2]);
});
