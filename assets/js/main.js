
const pesoValor = document.querySelector('#peso');
const alturaValor = document.querySelector('#altura');
const exibirResultado = document.querySelector('.exibir-resultado');
const formulario = document.querySelector('form');
formulario.addEventListener('submit', function (event){
    event.preventDefault()
}) 


function calculoImc() {
    const peso = Number(pesoValor.value.replace(',','.'));
    const altura = Number(alturaValor.value.replace(',','.'));
    const imc = peso / (altura * altura);

    if (!peso) {
        exibirResultado.innerHTML = ' Peso inválido '
        exibirResultado.style.display = 'block';
        exibirResultado.classList.add('resultado-erro');
        exibirResultado.classList.remove('resultado-valido')
    } else if (!altura) {
        exibirResultado.innerHTML = ' Altura inválido '
        exibirResultado.style.display = 'block';
        exibirResultado.classList.add('resultado-erro');
        exibirResultado.classList.remove('resultado-valido')
    } else {
        if (imc < 18.5) {
            exibirResultado.innerHTML = (` Seu IMC é ${imc.toFixed(2)} (Abaixo do Peso) `);
            exibirResultado.style.display = 'block';
            exibirResultado.classList.add('resultado-valido');
            exibirResultado.classList.remove('resultado-erro');

        } else if (imc >= 18.5 && imc <= 24.9) {
            exibirResultado.innerHTML = (` Seu IMC é ${imc.toFixed(2)} (Peso Normal) `);
            exibirResultado.style.display = 'block';
            exibirResultado.classList.add('resultado-valido');
            exibirResultado.classList.remove('resultado-erro');
        } else if (imc >= 25 && imc <= 29.9) {
            exibirResultado.innerHTML = (` Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`);
            exibirResultado.style.display = 'block';
            exibirResultado.classList.add('resultado-valido');
            exibirResultado.classList.remove('resultado-erro');
        } else if (imc >= 30 && imc <= 34.9) {
            exibirResultado.innerHTML = (` Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`);
            exibirResultado.style.display = 'block';
            exibirResultado.classList.add('resultado-valido');
            exibirResultado.classList.remove('resultado-erro');
        } else if (imc >= 35 && imc <= 39.9) {
            exibirResultado.innerHTML = (` Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`);
            exibirResultado.style.display = 'block';
            exibirResultado.classList.add('resultado-valido');
            exibirResultado.classList.remove('resultado-erro');
        } else {
            exibirResultado.innerHTML = (` Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`);
            exibirResultado.style.display = 'block';
            exibirResultado.classList.add('resultado-valido');
            exibirResultado.classList.remove('resultado-erro');
        }
    }
    pesoValor.value = ''
    alturaValor.value = ''
    pesoValor.focus()

}


const resultadoImc = document.querySelector('button');
resultadoImc.addEventListener('click', calculoImc);