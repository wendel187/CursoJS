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
    else{
        res.innerHTML = "Contando: "

        for(let c = num1; c <= num2; c += seque){
            res.innerHTML += `${c} \u{1FAE1}` 

        }

    }
   
}









function tabuada(){
    const n1 = document.getElementById("n1");
    const tab = document.getElementById("seltab");

    if (n1.value.length == 0) {
        window.alert("Por favor digite um número")
    } else{
        let n = Number(n1.value)  
        var i = 1
        tab.innerHTML = ''
    while (i <= 10){
        let item = document.createElement('option')
        item.text = `${n} x ${i} = ${n*i}`
        tab.appendChild(item)
        i++
        }   
     }
   
}









