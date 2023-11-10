import auth from "./auth";

const formulario = document.querySelector('#form');
formulario.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.querySelector('#matricula').value + '@email.com';
    const password = document.querySelector('#password').value;
    const data = {
        email,
        password
    };
    console.log(data);
    const response = await auth.signInWithPassword(data);
    console.log(response);
    response.error ? alert(response.error.message) : window.location.href = './index.html';
});
