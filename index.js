const convertidor = (n1, n2) => n1 / n2
let nombre = prompt("Ingrese su NOMBRE")
let valor1 = parseInt(prompt("Elije una moneda: 1 = Dolar | 2 = Euro"))

while (valor1 !== 1 && valor1 !== 2) {
    alert("Por favor, vuelva a intentarlo con alguna de las opciones disponibles.")
    valor1 = parseInt(prompt("Elije una moneda con formato numerico: 1 = Dolar | 2 = Euro"))
}


if (valor1 === 1 || valor1 === 2) {
    const num1 = parseInt(prompt("Ingresa tus Pesos Argentinos"))
    if (valor1 === 1) {
        const dolar = 375;
        const resultadoDolar = convertidor(num1, dolar)
        alert("El cambio de Pesos Argentinos a Dolares es: U$ " + resultadoDolar.toFixed(2))
    } else if (valor1 === 2) {
        const euro = 386.75;
        const resultadoEuro = convertidor(num1, euro)
        alert("El cambio de Pesos Argentinos a Euros es: €$ " + resultadoEuro.toFixed(2))
    }
} 

let pedido = parseInt(prompt("¿Desea confirmar la operación? Elija una de las siguientes opciones con formato numerico: 1 = SI | 2 = NO"))

while (pedido !== 1 && pedido !== 2) {
    alert("Por favor, vuelva a intentarlo con alguna de las opciones disponibles.")
    pedido = parseInt(prompt("¿Desea confirmar la operación? Elija una de las siguientes opciones con formato numerico: 1 = SI | 2 = NO")) }

if (pedido === 1){
    alert( nombre + " muchas gracias por su compra :)")
} else {
    alert( nombre + " esperamos que pueda realizar una compra en un futuro.")
}
    
