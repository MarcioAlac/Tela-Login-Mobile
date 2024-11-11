const btnReg = document.querySelector('.btn-reg');
const overlay = document.querySelector('.overlay');
const titleOverlayer = document.querySelector('.overlay-content h1');

btnReg.addEventListener('click', () => {
    overlay.classList.toggle('active');

    if (btnReg.innerText === "Registre-se") {
        btnReg.innerText = "Entrar na conta";
        titleOverlayer.innerText = "Tenho Conta e Quero Logar !"
    } else {
        btnReg.innerText = "Registre-se";
        titleOverlayer.innerText = "Olá, Não tem Conta Ainda ?"
    }

    
});
