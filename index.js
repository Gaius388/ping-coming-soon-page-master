const btn = document.getElementById("btn");
const err = document.getElementById("err");
const inputField = document.getElementById("email");


btn.addEventListener('click', function() {
    if(email.value <= 0 || email.value == null || email.value == '' || (email.value.indexOf('@') == -1) || 
    (email.value.indexOf('.com') == -1)
    ) {
        err.style.display = 'block';
        err.style.fontSize = '1rem'
        inputField.style.border = '2px solid hsl(354, 100%, 66%)';
        btn.style.height = '3.3em'
    }else{
        err.style.display = 'none';
        inputField.style.border = '1px solid hsl(0, 0%, 59%)';
        err.style.fontSize = '1rem'
        return true
    }
})
