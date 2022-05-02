var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function () {
    //tirando o default do botão
    event.preventDefault();

    //selecionando o formulario do html
    var form = document.querySelector("#form-adiciona");

    //extraindo paciente do formulario
    var paciente = obtemPaciente(form);


    //checa erros
    var erro = validaPaciente(paciente);
    if (erro.length > 0) {
        exibeErro(erro);
        return;
    }
    adicionaPaciente(paciente);
    //Limpa os campos do formulario
    limpaFormulario(form);
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML="";
});

function adicionaPaciente(paciente){
    //cria td e tr do paciente
    var pacienteTr = criaTr(paciente);
     //monta a tabela com o novo paciente
     var tbody = document.querySelector("#tabela-paciente");
     tbody.appendChild(pacienteTr);

}
function obtemPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function criaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function criaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(criaTd(paciente.nome, "nome"));
    pacienteTr.appendChild(criaTd(paciente.peso, "peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "gordura"));
    pacienteTr.appendChild(criaTd(paciente.imc, "imc"));

    return pacienteTr;
}

function limpaFormulario(form) {
    form.reset();
}

function validaPaciente(paciente) {
    var erros = [];
    if (paciente.nome.length == 0) {
        erros.push("Nome não pode ser em branco! ");
    }
    if (paciente.peso.length == 0) {
        erros.push("Peso não pode ser em branco! ");
    } else if (validaPeso(paciente.peso)) {
        erros.push("Peso inválido!");
    }
    if (paciente.altura.length == 0) {
        erros.push("Altura não pode ser em branco! ");
    } else if (validaAltura(paciente.altura)) {
        erros.push("Altura inválida!");
    }
    if (paciente.gordura.length == 0) {
        erros.push("Gordura não pode ser em branco! ");
    }
    return erros;
}

function exibeErro(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = "⚠ " + erro;
        ul.appendChild(li);
    });
}