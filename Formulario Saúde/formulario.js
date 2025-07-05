// Executar mascaras
function mascara(o, f) //Define o objeto e chama a função
{
    objeto = o
    funcao = f
    setTimeout("executaMascara()", 1)

}

function executaMascara() {
    objeto.value = funcao(objeto.value)

}

//Telefone
function telefone(variavel) {
    variavel = variavel.replace(/\D/g, "")
    variavel = variavel.replace(/^(\d\d)(\d)/g, "($1)$2")//ADICIONA PARENTESES EM VOLTA DOS DOIS PRIMEIROS DIGITOS

    variavel = variavel.replace(/(\d{5})(\d)/g, "$1-$2")//ADICIONA HIFEN ENTRE O QUARTO E QUINTO DIGITO

    return variavel
}

//rg e cpf
function RGeCPF(variavel) {
    variavel = variavel.replace(/\D/g, "")

    variavel = variavel.replace(/(\d{3})(\d)/, "$1.$2") //ADICIONA O PONTO 

    variavel = variavel.replace(/(\d{3})(\d)/, "$1.$2") //ADICIONA O PONTO 

    variavel = variavel.replace(/(\d{3})(\d{1,2})$/, "$1-$2") //ADICIONA O HIFEN 

    return variavel
}

//Cep
function cep(variavel) {
    variavel = variavel.replace(/\D/g, "")

    variavel = variavel.replace(/(\d{2})(\d)/, "$1.$2") //ADICIONA O PONTO 


    variavel = variavel.replace(/(\d{3})(\d{1,2})$/, "$1-$2") //ADICIONA O HIFEN 

    return variavel
}

//cartão do sus
function cartaosus(variavel) {
    variavel = variavel.replace(/\D/g, "")

    variavel = variavel.replace(/(\d{6})(\d)/, "$1-$2") //ADICIONA O HIFEN


    return variavel
}

//data
function dtnascimento(variavel) {
    variavel = variavel.replace(/\D/g, "")

    variavel = variavel.replace(/(\d{2})(\d)/, "$1/$2") //ADICIONA A BARRA

    variavel = variavel.replace(/(\d{2})(\d)/, "$1/$2") //ADICIONA A BARRA


    return variavel
}

//data
function data(variavel) {
    variavel = variavel.replace(/\D/g, "")

    variavel = variavel.replace(/(\d{2})(\d)/, "$1/$2") //ADICIONA A BARRA

    variavel = variavel.replace(/(\d{2})(\d)/, "$1/$2") //ADICIONA A BARRA


    return variavel
}

function nome(variavel) {
    variavel = variavel.replace(/\d/g, "");

    return variavel

}
function posto_saude(variavel) {
    variavel = variavel.replace(/\d/g, "");

    return variavel

}
function tipo_diabetes(variavel) {
    variavel = variavel.replace(/\d/g, "");

    return variavel

}



