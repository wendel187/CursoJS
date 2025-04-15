let valores = []

function adicionar() {
    const numInput = document.getElementById("num1")
    const lista = document.getElementById("seltab")
    let numero = Number(numInput.value)

    if (numero < 1 || numero > 100 || numInput.value.length === 0) {
        alert("Digite um número entre 1 e 100.")
    } else if (valores.includes(numero)) {
        alert("Número já adicionado.")
    } else {
        valores.push(numero)
        let item = document.createElement('option')
        item.text = `Valor ${numero} adicionado.`
        lista.appendChild(item)
        numInput.value = ''
        numInput.focus()
    }
}


function finalizar() {
        if (valores.length === 0) {
            alert("Adicione valores antes de finalizar.")
        } else {
            let resultado = document.getElementById("res")
            resultado.innerHTML = ''
            let menor = valores[0]
            let maior = valores[0]
            let soma = valores[0]
            let media = valores[0]
            for (let pos in valores){
                soma += valores[pos]
                if(valores[pos] > maior)
                    maior = valores[pos]
                if(valores[pos] < menor)
                    menor = valores[pos]
            }
            media = soma / valores.length
            resultado.innerHTML = ''
            resultado.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
            resultado.innerHTML += `<p>O maior número ditado foi ${maior}.</p>`
            resultado.innerHTML += `<p>O menor número ditado foi ${menor}.</p>`
            resultado.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
            resultado.innerHTML += `<p>A media dos valores é ${media}.</p>`
        }
    }
    
