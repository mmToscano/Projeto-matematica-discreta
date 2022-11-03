let nomeDoObjeto = document.querySelectorAll(".inputDosAgrupamentos")[1];
let anoDoObjeto = document.querySelectorAll(".inputDosAgrupamentos")[3];

let serie1 = document.querySelectorAll(".uls")[0];
let serie2 = document.querySelectorAll(".uls")[1];
let serie3 = document.querySelectorAll(".uls")[2];

function adicionar(){

    switch(anoDoObjeto.value){
        case "1":
            var objeto = document.createElement('li');
            objeto.innerHTML = nomeDoObjeto.value + " Série: " + anoDoObjeto.value;
            serie1.appendChild(objeto);
            break;
        case "2":
            var objeto = document.createElement('li');
            objeto.innerHTML = nomeDoObjeto.value + " Série: " + anoDoObjeto.value;
            serie2.appendChild(objeto);
            break;
        case "3":
            var objeto = document.createElement('li');
            objeto.innerHTML = nomeDoObjeto.value + " Série: " + anoDoObjeto.value;
            serie3.appendChild(objeto);
            break;
        default:
            var objeto = document.createElement('li');
            objeto.innerHTML = nomeDoObjeto.value + " Série: " + anoDoObjeto.value;
            serie1.appendChild(objeto);
            break;
    }
}