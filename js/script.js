// ---------------------- js Calculadora -----------------------

function criarNomeCompleto() {
    var nome = "Gustavo";
    var sobrenome = "de Jesus";

    var nomeCompleto = nome + " " + sobrenome;
    return nomeCompleto;
}

function soma(n1, n2, n3, n4) {

    var mais = (n1 + n2 + n3 + n4) / 4;

    return mais;
}

// ---------------------- js Formulario 2 -----------------------

function validarFormulario() {
    var nome = document.getElementById("nome").value;
    // -----Numero de caracter-----
    // if (nome.length == 0) {
    //     alert ("vazio");
    // }

    // Validando nome
    if (nome.trim() == "") {
        document.getElementById("nome").value = "";
        console.log("Insira um nome!");
        return;
    }

    // Validando idade
    var idade = document.getElementById("idade").value;
    idade = parseInt(idade);
    if (isNaN(idade)) {
        idade = 0;
    }
    if (idade < 18 || idade > 150) {
        console.log("Idade mínima é 18 e a máxima é 150");
        return;
    }
    // Validando sexo
    var sexo = document.getElementsByName("sexo");
    var selectSexo = false;
    
    for (var i = 0; i < sexo.length; i++) {
        if (sexo[i].checked == true) {
            selectSexo = true;
        }
    }
    if (selectSexo == false) {
        console.log("Escolha um sexo");
        return;
    }

    alert ("Tudo ok!!!");
}
function mostrarEasterEgg() {

    // Mostrando easter-egg
    var br = document.getElementsByName("brasileiro");
    var brasileiro = br[0].checked;
    if (brasileiro) {
        document.getElementById("easter-egg").innerText = "Hue Hue";
    }
    else {
        document.getElementById("easter-egg").innerText = "Hello Gringo";
    }
}

function alteraDocumentoInput(doc) {

    // Validando documento
    var rg = document.getElementById("rg");
    var cpf = document.getElementById("cpf");
    var cnh = document.getElementById("cnh");

    rg.classList.add("hide");
    cpf.classList.add("hide");
    cnh.classList.add("hide");

    switch (doc) {
        case "RG":
            rg.classList.remove("hide");
            break;
        case "CPF":
            cpf.classList.remove("hide");
            break;
        case "CNH":
            cnh.classList.remove("hide");
            break;
        default:
            console.log("Escolha um tipo de documento");
            break;
    }
}