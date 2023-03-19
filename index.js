// Bienvenida

let nombreUsuario = prompt("Ingrese su NOMBRE")

while (nombreUsuario === null) {
    nombreUsuario = prompt("Ingrese su NOMBRE nuevamente")
    continue
}


// Creacion de class Casa de cambio

class Casa {
    constructor(nombre, id, dolar, euro, real) {
        this.nombre = nombre
        this.id = id
        this.dolar = dolar
        this.euro = euro
        this.real = real
    }
}

// Agrego casas de cambio al Array

const casas = [
    new Casa("Zona Sur", 1, 300, 325, 150),
    new Casa("Zona Norte", 2, 320, 345, 175),
    new Casa("Zona Oeste", 3, 315, 330, 165),
    new Casa("Zona Centro", 4, 390, 400, 200),
    new Casa("Zona Este", 5, 315, 320, 160)
]

// eleccion casa de cambio

let casaElegida = parseInt(
    prompt(
        'Escoge el numero de Casa de Cambio que deseas cotizar? 1.Zona Sur || 2.Zona Norte || 3.Zona Oeste || 4.Zona Centro || 5.Zona Este'
    )
)

let eleccionCasa = false

let casa

while (eleccionCasa === false) {
    casa = casas.find((casa) => casa.id === casaElegida)
    if (!casa) {
        casaElegida = parseInt(
            prompt(
                'Escoge UN numero de Casa de Cambio que figura entre las opciones: 1.Zona Sur || 2.Zona Norte || 3.Zona Oeste || 4.Zona Centro || 5.Zona Este'
            )
        )
    } else {
        eleccionCasa = true
    }
}

//funcion de conversion de moneda de cambio

const pesosConvertir = parseInt(
    prompt("Ingresa los pesos que deseas cambiar")
)

const convertidor = (n1, n2) => n1 / n2

const dolar = convertidor(pesosConvertir, casa.dolar)
const euro = convertidor(pesosConvertir, casa.euro)
const real = convertidor(pesosConvertir, casa.real)


alert(
    `Las opciones que te ofrece ${casa.nombre} son: 1.U$ ${dolar.toFixed(2)} - 2.€$ ${euro.toFixed(2)} - 3.R$ ${real.toFixed(2)}`
)


// Confirmacion de operacion

let pedido = parseInt(prompt("¿Desea confirmar la operación? Elija una de las siguientes opciones con formato numerico: 1 = SI | 2 = NO"))

while (pedido !== 1 && pedido !== 2) {
    alert("Por favor, vuelva a intentarlo con alguna de las opciones disponibles.")
    pedido = parseInt(prompt("¿Desea confirmar la operación? Elija una de las siguientes opciones con formato numerico: 1 = SI | 2 = NO"))
}

if (pedido === 1) {
    alert(nombreUsuario + " muchas gracias por su compra :)")
} else {
    alert(nombreUsuario + " esperamos que pueda realizar una compra en un futuro.")
}