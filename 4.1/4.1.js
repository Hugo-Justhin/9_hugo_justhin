function cambiarColor() {
    var div = document.getElementById('micaja');

    var divColor = div.style.backgroundColor;

    if (divColor == "black") {
        div.style.backgroundColor = "pink";

    } else if (divColor == "pink") {
        div.style.backgroundColor = "blue";
    }
    else {
        div.style.backgroundColor = "black";
    }

}
micaja.onmouseleave = () => {
    micaja.innerHTML += "Adios";
}

micaja.omouseenter = () => {
    micaja.innerHTML += "Hola";
}
