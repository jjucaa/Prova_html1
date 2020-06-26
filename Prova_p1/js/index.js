var matri = 123456;
var passw = 123456;

let loginButton = document.getElementById("lButton");
    loginButton.onclick = function(){
		login();
    }


function login() {
    let temp_mat = document.getElementById('matricula');
    let temp_pass = document.getElementById('senha');

    if((temp_mat.value == matri) && (passw == temp_pass.value)){
        document.getElementById('matricula').value = '';
        document.getElementById('senha').value = '';
        alert("Seja bem vindo!");
    } else if(temp_mat.value != matri || temp_pass.value != passw){
        showFieldMessageError('erro_pass');
    }
}

function showFieldMessageError(inputId) {
    let messageErrorId = inputId + 'Error';
    let spanError = document.getElementById(messageErrorId);
    spanError.className = spanError.className.replace('hide', '').trim();
}

function hideFieldMessageError(inputId) {
    let messageErrorId = inputId + 'Error';
    let spanError = document.getElementById(messageErrorId);
    if (!spanError.className.includes('hide')) {
        spanError.className = spanError.className + ' hide';
    }
}