function gerar() {
    // Pega os valores do input
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const seque = Number(document.getElementById("seque").value);
    const res = document.getElementById("resu");

    // Validação básica
    if (isNaN(num1) || isNaN(num2) || isNaN(seque) || seque <= 0) {
        res.innerHTML = "Por favor, insira valores válidos (e o intervalo deve ser maior que 0).";
        return;
    }

    let resultado = "";
    let atual = num1 + seque;

    while (atual < num2) {
        resultado += atual + " ";
        atual += seque;
    }

    if (resultado === "") {
        res.innerHTML = "Nenhum número gerado com esses parâmetros.";
    } else {
        res.innerHTML = "Resultado da sequência: <br>" + resultado.trim();
    }
}
