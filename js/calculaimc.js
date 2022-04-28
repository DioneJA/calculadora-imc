var x = document.querySelector(".titulo");
x.textContent = "Nutricionista: Calculadora de IMC";


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdpeso = paciente.querySelector(".peso");
    var tdaltura = paciente.querySelector(".altura");

    var peso = tdpeso.textContent;
    var altura = tdaltura.textContent;
    var tdimc = paciente.querySelector(".imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (pesoEhValido) {
        pesoEhValido = false;
        tdimc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    else if (alturaEhValida) {
        alturaEhValida = false;
        tdimc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    else{
        tdimc.textContent = calculaImc(peso,altura);
    }
}
function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso <= 0 || peso >= 1000) {
        return true;
    }
    return false;
}

function validaAltura(altura) {
    if (altura <= 0 || altura >= 3) {
        return true;
    }
    return false;
}