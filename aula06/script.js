function gerar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("img");
    var data = new Date();
    var horas = data.getHours();
    
    msg.innerHTML = `Agora são ${horas} horas`;

    if (horas >= 6 && horas < 12) {
        img.src = "img/manha.png";
        document.body.style.backgroundColor = "#89CFF0";
    } else if (horas = 12 && horas < 16) {
        img.src = "img/tarde.jpg";
        document.body.style.backgroundColor = "#d6751f";
    } else  {
        img.src = "img/noite.jpg";
        document.body.style.backgroundColor = "#040a52";
}
}


function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("idade");
    var res = document.getElementById("res");

    if (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert("Verifique os dados e tente novamente.");
    } else {
        var fsex = document.getElementsByName("sex");
        var idade = ano - Number(fano.value);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");

        if (fsex[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "img/child-h.jpg");
            } else if (idade < 21) {
                img.setAttribute("src", "img/jovem-h.jpg");
            } else if (idade < 50) {
                img.setAttribute("src", "img/adulto-h.jpg");
            } else {
                img.setAttribute("src", "img/idoso-h.jpg");
            }
        } else if (fsex[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "img/child-m.jpg");
            } else if (idade < 21) {
                img.setAttribute("src", "img/jovem-m.jpg");
            } else if (idade < 50) {
                img.setAttribute("src", "img/adulto-m.jpg");
            } else {
                img.setAttribute("src", "img/idoso-m.jpg");
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img); 
        
    }
}
