function calcularNotaFinal(){
    var notaPrimeraEv = document.getElementById("nota_primera_ev").value;
    console.log("nota primer input: " + notaPrimeraEv);

    var notaSegundaEv = document.getElementById("nota_segunda_ev").value;
    console.log("nota segundo input " + notaSegundaEv);

    var nombre = document.getElementById("nombre").value;

    var divResultado = document.getElementById("resultado");

    var notaFinal = calcularMedia(notaPrimeraEv, notaSegundaEv);
    console.log("Nota Final" + notaFinal)
    
    if(notaFinal >= 5){
        divResultado.style.backgroundColor = "green";
        divResultado.innerHTML = "Aprobado con, " + nombre + ". La nota final es " + notaFinal;
    } else{
        divResultado.style.backgroundColor = "red";
        divResultado.innerHTML = "Suspendido con, " + nombre + ". La nota final es " + notaFinal;
    }
}
function calcularMedia(valor1, valor2) {
    return (parseInt(valor1) + parseInt(valor2))/2;
}