function perimetrocuadrado (lado) {
    return lado*4
}

function areacuadrado (area) {
    return area*area
}

function perimetro() {
    const input = document.getElementById("inputCuadrado");
    const valor = input.value;

    const perimetro = perimetrocuadrado(valor)
    alert(perimetro)
}

function  area () {
    const input = document.getElementById("inputCuadrado");
    const valor = input.value;

    const area = areacuadrado(valor)
    alert(area)
}