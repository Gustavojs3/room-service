document.getElementById("incluirBtn").addEventListener("click", incluirRegistro);
document.getElementById("alterarBtn").addEventListener("click", alterarRegistro);

var linhaEdicao = null;

function removerRegistro(elemento) {
    var linha = elemento.parentNode.parentNode;
    document.getElementById("corpoTabela").removeChild(linha);
}

function editarRegistro(elemento) {
    linhaEdicao = elemento.parentNode.parentNode;
    var colunas = linhaEdicao.children;

    document.getElementById("nome").value = colunas[0].innerText;
    document.getElementById("idade").value = colunas[1].innerText;
    document.getElementById("profissao").value = colunas[2].innerText;

    document.getElementById("idade").focus();
    document.getElementById("profissao").focus();
    document.getElementById("nome").focus();

    document.getElementById("incluirBtn").classList.add("hide");
    document.getElementById("alterarBtn").classList.remove("hide");

    var tdBtn = document.getElementsByClassName("td-btns");

    for (var i = 0; i < tdBtn.length; i++) {
        tdBtn[i].classList.add("hide");
    }
}

function incluirRegistro() {
    var aluno = criarAluno();

    var alunoValido = validar(aluno);
    if (alunoValido == true) {
        addAlunoNaTabela(aluno);
        limparFormulario();
        exibirMensagemSucesso();
    }
    else {
        exibirMensagemErro();
    }
}

function validar(aluno) {
    if (aluno.nome == "" || isNaN(aluno.idade) || aluno.profissao == "") {
        return false;
    }
    else {
        return true;
    }
}

function limparFormulario() {
    document.getElementById("formularioAluno").reset();
}

function exibirMensagemErro() {
    Materialize.toast("Todos os campos são obrigatórios!", 3000);
}

function exibirMensagemSucesso() {
    Materialize.toast("Concluído!", 3000);
}

function addAlunoNaTabela(aluno) {
    var linha = document.createElement("tr");
    var colunaNome = document.createElement("td");
    var colunaIdade = document.createElement("td");
    var colunaProfissao = document.createElement("td");
    var colunaEdicao = document.createElement("td");

    colunaNome.innerText = aluno.nome;
    colunaIdade.innerText = aluno.idade;
    colunaProfissao.innerText = aluno.profissao;
    colunaEdicao.innerHTML = '<button class="btn-floating waves-effect waves-light green" type="button" onclick="editarRegistro(this);"><i class="material-icons">edit</i></button> <button id="btnForm" class="btn-floating waves-effect waves-light red" type="button" onclick="removerRegistro(this);"><i class="material-icons">delete</i></button>';
    colunaEdicao.classList.add("td-btns");

    linha.appendChild(colunaNome);
    linha.appendChild(colunaIdade);
    linha.appendChild(colunaProfissao);
    linha.appendChild(colunaEdicao);

    document.getElementById("corpoTabela").appendChild(linha);
}

function alterarRegistro() {
    var aluno = criarAluno();
    var alunoValido = validar(aluno);

    if (alunoValido == true) {
        var colunas = linhaEdicao.children;

        colunas[0].innerText = aluno.nome;
        colunas[1].innerText = aluno.idade;
        colunas[2].innerText = aluno.profissao;

        limparFormulario();
        exibirMensagemSucesso();

        document.getElementById("incluirBtn").classList.remove("hide");
        document.getElementById("alterarBtn").classList.add("hide");
        document.getElementsByClassName("td-btns").classList.remove("hide");
    }
    else {
        exibirMensagemErro();
    }

    var tdBtn = document.getElementsByClassName("td-btns");

    for (var i = 0; i < tdBtn.length; i++) {
        tdBtn[i].classList.remove("hide");
    }
    
}

function criarAluno() {
    var aluno = {
        nome: document.getElementById("nome").value.trim(),
        idade: parseInt (document.getElementById("idade").value),
        profissao: document.getElementById("profissao").value.trim()
    };

    return aluno;
}