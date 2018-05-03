var atividadeFisica;
function calculaIMC ()
{
    var idade = document.getElementById("inputAge").value;
    var altura = document.getElementById("inputHeight").value;
    var peso = document.getElementById("inputWeight").value;
    var imc = peso/ ((altura / 100)*(altura / 100));
    atividadeFisica = document.getElementById("result").innerHTML;
    var resultado = "Seu IMC é " + imc + ". ";

    if (idade > 60)
    {
        if (imc < 22)
        {
            resultado += "Você está abaixo do seu peso ideal. ";
        } else if (imc < 27)
        {
            resultado += "Você está dentro da faixa de peso ideal. ";
        } else {
            if (atividadeFisica == "Intensa")
            {
                resultado += "O seu IMC está acima do ideal, porém, como você pratica atividades físicas " +
                    "intensamente, pode ser que o resultado dessas atividades influencie no seu peso. Recomenda-se " +
                    "uma análise mais detalhada e confiável com um profissional qualificado. "
            } else {
               resultado += "Você está acima do peso ideal. ";
            }
        }
    } else if (idade > 19){
        if (imc < 18.5)
        {
            resultado += "Você está abaixo do peso ideal. ";
        } else if (imc < 25)
        {
            resultado += "Você está dentro da faixa de peso ideal. ";
        } else {
            if (atividadeFisica == "Intensa")
            {
                resultado += "O seu IMC está acima do ideal, porém, como você pratica atividades físicas " +
                    "intensamente, pode ser que o resultado dessas atividades influencie no seu peso. Recomenda-se " +
                    "uma análise mais detalhada e confiável com um profissional qualificado. "
            } else {
                resultado += "Você está acima do peso ideal. ";
            }
        }
    } else {
        if (imc < 18.5)
        {
            resultado += "Você está abaixo do peso ideal. ";
        } else if (imc < 25)
        {
            resultado += "Você está dentro da faixa de peso ideal. ";
        } else {
            if (atividadeFisica == "Intensa")
            {
                resultado += "O seu IMC está acima do ideal, porém, como você pratica atividades físicas " +
                    "intensamente, pode ser que o resultado dessas atividades influencie no seu peso. Recomenda-se " +
                    "uma análise mais detalhada e confiável com um profissional qualificado. "
            } else {
                resultado += "Você está acima do peso ideal. ";
            }
        }
        resultado += "É importante saber que na idade inserida o resultado é extremamente incerto, o ideal é fazer " +
            "uma consulta com um profissional qualificado, pois até os 19 anos de idade cada corpo se desenvolve numa" +
            " velocidade e numa forma diferente do outro. Para saber se o IMC é ideal ou não deve ser feita uma " +
            "comparação com uma tabela da OMS, que não é contemplada neste site. ";
    }

    document.getElementById("result").innerHTML = resultado;
    document.getElementById("result").style.visibility = "visible";
}
