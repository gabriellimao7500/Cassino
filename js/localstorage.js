document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registro-form");

    registroForm.addEventListener("submit", function (event) {
        event.preventDefault();

        //pegar os valores dos input
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        //verifica se o campo usuario ta vazio
        if (!username) {
            alert("Por favor, forneça um nome de usuário válido.");
            return;
        }

        //verifica se o usuário já existe no localstorage
        if (localStorage.getItem(username)) {
            alert("Usuário já existe. Escolha outro nome de usuário.");
            window.location.href = "./login.html";
        } else {
            //Armazena as informações do usuário no localStorage
            localStorage.setItem(username, password);
            alert("Registro concluído com sucesso. Você pode fazer login agora.");
            window.location.href = "login.html"; 
        }
        registroForm.reset();
    });
});

//login 

const loginForm = document.getElementById("login-form");
document.addEventListener("DOMContentLoaded", function () {

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        //pegar valores do formulário
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        //Verifica se o usuário e senha correspondem
        const storedPassword = localStorage.getItem(username);

        if (storedPassword === password) {
            alert("Login bem-sucedido. Redirecionando para a página de boas-vindas.");
            // Redirecione para a página de boas-vindas ou faça o que for necessário
            window.location.href = "../index.html";
        } else {
            alert("Credenciais inválidas. Tente novamente.");
        }

        loginForm.reset();
    });
});