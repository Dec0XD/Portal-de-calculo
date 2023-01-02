 function logar(){
    var nome = document.getElementById('Nome').value;
    var login = document.getElementById('Login').value;
    var senha = document.getElementById('Senha').value;

    if (nome = "PVP" && login == "alunopvp@gmail.com" && senha == "Pvp1234@@"){
        alert('Sucesso');
        location.href = "cursos.html";
    }
    else {
        alert('usuario ou senha incorretos')
    }
}


